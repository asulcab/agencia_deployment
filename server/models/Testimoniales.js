const Sequelize = require('sequelize');

const db = require('../config/database');

const Testimonial = db.define('testimoniales', {
    // Definiendo Modelos, SIQUELIZE
    // https://sequelize.org/master/manual/models-definition.html
    // https://sequelize.readthedocs.io/en/v3/docs/models-definition/#data-types
    nombre: {
        type: Sequelize.STRING
    },
    correo: {
        type: Sequelize.STRING
    },
    mensaje: {
        type: Sequelize.STRING
    }
});

module.exports = Testimonial;