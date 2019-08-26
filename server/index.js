// Importando 'Express'
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
// Importando rutas
const routes = require('./routes');
// Importando archivo de VARIABLES
const configs = require('./config');
// Importando la BD
const db = require('./config/database');

// Configurando 'dotenv'
require('dotenv').config({ path: 'variables.env'});

// Probando conexión
db.authenticate()
    .then(() => console.log('Muy bien!! La Base de Datos esta Conectada!!'))
    .catch(error => console.log(error));

// Configurando rutas en 'Express'
const app = express();

// Habilitamos 'pug'
app.set('view engine', 'pug');

// Añadir las vistas
app.set('views', path.join(__dirname, './views'));

// Cargar una vista estática llamada public
app.use(express.static('public'));

/**VARIABLES */
// Validar si estamos en desarrollo o production
const config = configs[app.get('env')];
// Creamos la variable para el sitio web
app.locals.titulo = config.nombresitio;

// Muestra el año actual y genera la ruta
app.use((req, res, next) => {
    // Crear una nueva fecha
    const fecha = new Date();
    res.locals.fechaActual = fecha.getFullYear();
    // 'req.path' devuelve lo que esta despues de la diagonal (/)
    res.locals.ruta = req.path;
    console.log(res.locals);

    // Utilizando el 'Middleware'
    return next();
});

// Ejecutamos el bodyParser
app.use(bodyParser.urlencoded({extended: true}));

// Cargar las rutas
app.use('/', routes());

/** Puerto y Host para la app */
const host = process.env.HOST || '0.0.0.0';
const port = process.env.PORT || 3000;

// Iniciar en puerto:
app.listen(port, host, () => {
    console.log('El servidor está funcionando!!');
});