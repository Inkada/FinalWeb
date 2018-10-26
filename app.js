var express = require('express'),
    consolidate = require('consolidate'),
    MongoClient = require('mongodb').MongoClient;

var app = express();

app.engine('hbs', consolidate.handlebars);
app.set('views', 'views');
app.set('view engine', 'hbs');

app.use("/static", express.static("directorios"))

app.get('/', (req, res) => {
    res.render('index', {
        productos: misDatos
    });
})

app.get('/productos:id', (req, res) => {
    res.send("dato");
    return;
    res.render('productos', {
        catalogo: dato
    })
})
app.listen(1234, () => {
    console.log("Escuchando en el puerto 1234")
})

var misDatos = [{
    id: 1,
    data: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    nombre: "vinoduchet",
    imagen: "wp2.jpg",
    precio: 8000,
    añejado: 12,
    tipo: "Blanco",
}, {
    id: 2,
    data: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    nombre: "vinoduchete",
    imagen: "wp2.jpg",
    precio: 7300,
    añejado: 39,
    tipo: "Blanco",
}, {
    id: 3,
    data: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    nombre: "vinoduchetete",
    imagen: "wp2.jpg",
    precio: 80000,
    añejado: 93,
    tipo: "Blanco",
}, {
    id: 4,
    data: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    nombre: "vinoducheteteo",
    imagen: "wp2.jpg",
    precio: 80,
    añejado: 4,
    tipo: "Blanco",
}, {
    id: 5,
    data: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    nombre: "vinoducheteteoe",
    imagen: "wp2.jpg",
    precio: 19000,
    añejado: 70,
    tipo: "Blanco",
}, {
    id: 6,
    data: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    nombre: "vinoducheteteoei",
    imagen: "wp2.jpg",
    precio: 20000,
    añejado: 80,
    tipo: "Blanco",
}, {
    id: 7,
    data: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    nombre: "vinoducheteteoeio",
    imagen: "wp2.jpg",
    precio: 97000,
    añejado: 90,
    tipo: "Blanco",
}, {
    id: 8,
    data: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    nombre: "vinoducheteteoeioi",
    imagen: "wp2.jpg",
    precio: 800000,
    añejado: 100,
    tipo: "Blanco",
}, {
    id: 9,
    data: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    nombre: "vinoducheteteoeioio",
    imagen: "wp2.jpg",
    precio: 800,
    añejado: 2,
    tipo: "Blanco",
}, {
    id: 10,
    data: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    nombre: "vinoducheteoteioie",
    imagen: "wp2.jpg",
    precio: 9000,
    añejado: 19,
    tipo: "Blanco",
}]