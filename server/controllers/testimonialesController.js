// Importando Modelo
const Testimonial = require('../models/Testimoniales');

//************************//
// Utilizando async/await //
//************************//
/**
 * Es recomendable trabajar con async/await, siempre que se trabaje con una Base de Datos.
 */
exports.mostrarTestimoniales = async (req, res) => {
    const testimoniales = await Testimonial.findAll()
    res.render('testimoniales', {
        pagina: 'Testimoniales',
        testimoniales
    });
}

exports.agregarTestimonial = async (req, res) => {
    // console.log(req.body);

    // Validando que todos los campos estén llenos
    let { nombre, correo, mensaje } = req.body;

    let errores = [];
    if (!nombre) {
        errores.push({ 'mensaje': 'Agrega tu Nombre' });
    }
    if (!correo) {
        errores.push({ 'mensaje': 'Agrega tu Correo Electrónico' });
    }
    if (!mensaje) {
        errores.push({ 'mensaje': 'Agrega tu Mensaje' });
    }

    // Revisar por errores
    if (errores.length > 0) {
        // Muestra la vista con errores
        const testimoniales = await Testimonial.findAll()
        res.render('testimoniales', {
            errores,
            nombre,
            correo,
            mensaje,
            pagina: 'Testimoniales',
            testimoniales
        })
    } else {
        // Almacenandoo en la BD
        Testimonial.create({
            nombre,
            correo,
            mensaje
        })
            .then(testimonial => res.redirect('/testimoniales'))
            .catch(error => console.log(error));
    }
}

//*********************//
// Utilizando Promesas //
//*********************//
/**
exports.mostrarTestimoniales = (req, res) => {
    Testimonial.findAll()
        .then(testimoniales => res.render('testimoniales', {
            pagina: 'Testimoniales',
            testimoniales
        }))
}

exports.agregarTestimonial = (req, res) => {
    // console.log(req.body);

    // Validando que todos los campos estén llenos
    let { nombre, correo, mensaje } = req.body;

    let errores = [];
    if (!nombre) {
        errores.push({ 'mensaje': 'Agrega tu Nombre' });
    }
    if (!correo) {
        errores.push({ 'mensaje': 'Agrega tu Correo Electrónico' });
    }
    if (!mensaje) {
        errores.push({ 'mensaje': 'Agrega tu Mensaje' });
    }

    // Revisar por errores
    if (errores.length > 0) {
        // Muestra la vista con errores
        Testimonial.findAll()
            .then(testimoniales => res.render('testimoniales', {
                errores,
                nombre,
                correo,
                mensaje,
                pagina: 'Testimoniales',
                testimoniales
            }))
    } else {
        // Almacenandoo en la BD
        Testimonial.create({
            nombre,
            correo,
            mensaje
        })
            .then(testimonial => res.redirect('/testimoniales'))
            .catch(error => console.log(error));
    }
}
 */