// Importando Modelo
const Viaje = require('../models/Viajes');

//************************//
// Utilizando async/await //
//************************//
/**
 * Es recomendable trabajar con async/await, siempre que se trabaje con una Base de Datos.
 */
exports.mostrarViajes = async (req, res) => {
    const viajes = await Viaje.findAll()
    res.render('viajes', {
        // Variable 1
        pagina: 'Próximos Viajes',
        viajes
    });
}
exports.mostrarViaje = async (req, res) => {
    // Leyendo la URL
    // res.send(req.params.id)

    const viaje = await Viaje.findByPk(req.params.id)
    res.render('viaje', {
        viaje
    });
}

// Utilizando Promesas
/**
exports.mostrarViajes = (req, res) => {
    Viaje.findAll()
        .then(viajes => res.render('viajes', {
            // Variable 1
            pagina: 'Próximos Viajes',
            viajes
        }))
        .catch(error => console.log(error))
}

exports.mostrarViaje = (req, res) => {
    // Leyendo la URL
    // res.send(req.params.id)

    Viaje.findByPk(req.params.id)
        .then(viaje => res.render('viaje', {
            viaje
        }))
        .catch(error => console.log(error));
}
 */