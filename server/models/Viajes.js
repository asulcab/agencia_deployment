const Sequelize = require('sequelize');

const db = require('../config/database');

const Viaje = db.define('viaje', {
    // Definiendo Modelos, SIQUELIZE
    // https://sequelize.org/master/manual/models-definition.html
    // https://sequelize.readthedocs.io/en/v3/docs/models-definition/#data-types
    titulo: {
        type: Sequelize.STRING
    },
    precio: {
        type: Sequelize.INTEGER
    },
    fecha_ida: {
        type: Sequelize.DATE
    },
    fecha_vuelta: {
        type: Sequelize.DATE
    },
    imagen: {
        type: Sequelize.STRING
    },
    descripcion: {
        type: Sequelize.STRING
    },
    disponibles: {
        type: Sequelize.STRING
    }
});

module.exports = Viaje;