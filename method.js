const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());

const puerto = 8080;
console.log(`El servidor esta escuchando desde el puerto: ${puerto}. `);
app.listen(puerto);

//Metodo GET.
app.get("/usuarios", (request, response) => {
    const usuario = require('./JS/users.json');
    response.json(usuario);
});

function loadData() {

    let divCuerpo = document.getElementById('cuerpo');
    fetch('http://localhost:8080/usuarios')
        .then(function (response) {
            return response.json()

        }).then(function (response) {
            let contactos = Object.keys(response);
            let randomContact = contactos[Math.floor(Math.random() * contactos.length)];
            let contacto = response[randomContact];
            divCuerpo.innerHTML = contacto.nombre + " " + contacto.apellido + " " + contacto.telefono;
        });
};

//Metodo POST. aun en proceso, no consigo subir data, pero si consultar.
app.post("/agregarUsuario", (request, response) => {
    const usuario = request.body;
    usuario.nombre = `${usuario.nombre} nuevo`;
    usuario.apellido = `${usuario.apellido} nuevo`
    usuario.telefono = `${usuario.telefono} nuevo`;
    response.json(usuario)
});

function postData() {
    fetch('http://localhost:8080/agregarUsuario')
        .then(function (response) {
            return response.json()
        }).then(function (response) {
            const usuario = request.body;
            usuario.nombre = `${usuario.nombre} nuevo`;
            usuario.apellido = `${usuario.apellido} nuevo`
            usuario.telefono = `${usuario.telefono} nuevo`;
            response.json(usuario)
            divCuerpo.innerHTML = usuario.nombre + " " + usuario.apellido + " " + usuario.telefono;
        })

};



