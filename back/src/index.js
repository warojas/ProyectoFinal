const express = require('express');
const helmet = require('helmet');
require('dotenv').config();
const estudiantesController = require('./controllers/estudiantesController');

const app = express();
app.use(express.json());
app.use(helmet());


console.log(__dirname); 
console.log(require.resolve('./controllers/estudiantesController'));

// Rutas
app.use('/api/estudiantes', estudiantesController);

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});
