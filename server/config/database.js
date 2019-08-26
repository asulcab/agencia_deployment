const Sequelize = require('sequelize');
// Leyendo variables con 'dotenv'
require('dotenv').config({ path: 'variables.env'});

// Provando Conexipon
console.log(process.env.BD_HOST);

// Configuarando conexión con 'Siquelize' y 'dotenv'
module.exports = new Sequelize(
    process.env.BD_NOMBRE,
    process.env.BD_USER,
    process.env.BD_PASS,
    {
        host: process.env.BD_HOST,
        port: process.env.BD_PORT,
        dialect: 'mysql',
        define: {
            timestamps: false
        },
        pool: {
            max: 5,
            min: 0,
            acquire: 30000,
            idle: 10000
        },
        operatorsAliases: false
    }
);
