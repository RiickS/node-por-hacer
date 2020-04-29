const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripcion de la tarea por hacer'
};

const completado = {
    default: true,
    alias: 'c',
    desc: 'Marca como completado o pendiente la tarea'
};


const argv = require('yargs')

.command('crear', 'Crear un elemento por hacer', {
        descripcion
    })
    .command('borrar', 'Borra un elemento de la lista', {
        descripcion
    })
    .command('actualizar', 'Actualiza el estado de completado de una tarea', {
        descripcion,
        completado
    })
    .help()
    .argv;

module.exports = {
    argv
}