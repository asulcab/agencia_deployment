// Importando contenido hacia este archivo
const express = require('express');
const router = express.Router();

//**************************//
// Importando Controladores //
//**************************//
const nosotrosController = require('../controllers/nosotrosController');
const homeController = require('../controllers/homeController')
const viajesController = require('../controllers/viajesController')
const testimonialesController = require('../controllers/testimonialesController')

// Rutas
module.exports = function() {
    
    /**
     * .use o .get: .use -> Responde a todos los verbos de HTTP. .get -> Responde solo a get.
     * req (request): Lo que preguntas o pides al servidor.
     * res (response): La resdpuesta del servidor.
     * .send: Metodo de NodeJS para imprimir o mostrar algo en pantalla.
     */

    // Página Inicio
    router.get('/', homeController.consultasHomePage);
    // Página Nosotros
    router.get('/nosotros', nosotrosController.infoNosotros);
    // Página Viajes
    router.get('/viajes', viajesController.mostrarViajes);
    // Página Viaje
    router.get('/viajes/:id', viajesController.mostrarViaje);
    // Página Testimoniales
    router.get('/testimoniales', testimonialesController.mostrarTestimoniales);
    // Cuando se llena el formulario
    router.post('/testimoniales', testimonialesController.agregarTestimonial);

    return router;
}
    