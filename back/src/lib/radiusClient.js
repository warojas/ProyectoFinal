const radius = require('radius');
const dgram = require('dgram');

require('dotenv').config();

const serverIP = process.env.RADIUS_SERVER;
const port = parseInt(process.env.RADIUS_PORT, 10);
const secret = process.env.RADIUS_SECRET;

const authenticateUser = async (username, password) => {
    const client = dgram.createSocket('udp4');

    const packet = radius.encode({
        code: 'Access-Request',
        secret,
        attributes: [
            ['User-Name', username],
            ['User-Password', password],
        ],
    });

    return new Promise((resolve, reject) => {
        client.send(packet, 0, packet.length, port, serverIP, (err) => {
            if (err) {
                client.close();
                return reject(err);
            }
        });

        client.on('message', (msg) => {
            const response = radius.decode({ packet: msg, secret });
            client.close();

            if (response.code === 'Access-Accept') {
                resolve('Authenticated successfully');
            } else {
                resolve('Authentication failed');
            }
        });

        client.on('error', (err) => {
            client.close();
            reject(err);
        });
    });
};

module.exports = { authenticateUser };
