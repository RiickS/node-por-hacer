const fs = require('fs');


let listadoPorHacer = [];

const guardarDataBase = () => {

    let data = JSON.stringify(listadoPorHacer);

    fs.writeFile(`DataBase/data.json`, data, (err) => {
        if (err) throw new Error('No se pudo grabar', err);
    });
}

const cargarDB = () => {

    try {

        listadoPorHacer = require('../DataBase/data.json');

    } catch (error) {
        listadoPorHacer = [];

    }

}


const crear = (descripcion) => {

    cargarDB();

    let porHacer = {
        descripcion,
        completado: false
    };

    listadoPorHacer.push(porHacer);

    guardarDataBase();

    return porHacer;

}

const getListado = () => {
    cargarDB();
    return listadoPorHacer;
}

const actualizar = (descripcion, completado = true) => {
    cargarDB();

    let index = listadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion);

    if (index >= 0) {
        listadoPorHacer[index].completado = completado;
        guardarDataBase();
        return true;
    } else {
        return false;
    }
}

// const borrar = (descripcion) => {
//     cargarDB();

//     let nuevoListado = listadoPorHacer.filter(tarea => {
//         return tarea.descripcion !== descripcion
//     });

//     if (listadoPorHacer.length === nuevoListado.length) {
//         return false;
//     } else {
//         listadoPorHacer = nuevoListado;
//         guardarDataBase();
//         return true;
//     }
// }

const borrar = (descripcion) => {

    cargarDB();

    let index = listadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion);


    if (index >= 0) {
        listadoPorHacer.splice(index, 1);
        guardarDataBase();
        return true;
    } else {
        return false;
    }

}


module.exports = {
    crear,
    getListado,
    actualizar,
    borrar
}