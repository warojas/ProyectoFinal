const express = require('express');
const helmet = require('helmet');
require('dotenv').config();

const estudiantesController = require('./controllers/estudiantesController');
const monitoreoController = require('./controllers/monitoreoController');
const deviceController = require('./controllers/deviceController');
const docenteController = require('./controllers/docenteController');
const administradorController = require('./controllers/administradorController'); 

const app = express();
app.use(express.json());
app.use(helmet());

console.log(__dirname); 
console.log(require.resolve('./controllers/estudiantesController'));

// Configurar rutas
app.use('/api/estudiantes', estudiantesController);
app.use('/api/monitoreo', monitoreoController);
app.use('/api/device', deviceController);
app.use('/api/docente', docenteController);
app.use('/api/administradores', administradorController); 

// Iniciar servidor
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});
