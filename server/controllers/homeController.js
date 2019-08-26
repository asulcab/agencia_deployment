// Importando Modelo
const Viaje = require('../models/Viajes');
const Testimonial = require('../models/Testimoniales');

//************************//
// Utilizando async/await //
//************************//
/**
 * Es recomendable trabajar con async/await, siempre que se trabaje con una Base de Datos.
 */
exports.consultasHomePage = async (req, res) => {
    // Configurando la consulta (query). Limitando la cantidad a mostrar
    const viajes = await Viaje.findAll({ limit: 3 });
    const testimoniales = await Testimonial.findAll({ limit: 3 });

    // Pasando resultados
    res.render('index', {
        // Variables
        pagina: 'Próximos Viajes',
        clase: 'home',
        viajes, // Cuando llave y valor tienen el mismo nombre
        testimoniales // Cuando llave y valor tienen el mismo nombre
    })
}

//**************************//
// Utilizando Promise.all() //
//**************************//
/**
exports.consultasHomePage = (req, res) => {
    const promises = [];
    // Configurando la consulta (query). Limitando la cantidad a mostrar
    promises.push(Viaje.findAll({
        limit: 3
    }))
    promises.push(Testimonial.findAll({
        limit: 3
    }))

    // Pasar el 'promise' y ejeutarlo
    const resultado = Promise.all(promises);
    // Pasando resultados
    resultado.then(resultado => res.render('index', {
        // Variables
        pagina: 'Próximos Viajes',
        clase: 'home',
        viajes: resultado[0],
        testimoniales: resultado[1]
    }))
        .catch(error => console.log(error))
}
 */