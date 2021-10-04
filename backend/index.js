const express = require("express");
const morgan = require('morgan');
const cors = require("cors");
const compression = require("compression");

//import routes
const cliente = require("./src/routes/clienteRequest");
const habitacion = require("./src/routes/habitacionesRequest");
const reserva = require("./src/routes/reservasRequest");
const login = require("./src/routes/loginAdmin");
const contacto = require("./src/routes/contantenosRequest");


const app = express();


//MIDELWARES
app.use(morgan('tiny'));
app.use(cors());
app.use(express.json());
app.use(compression());

app.use(express.urlencoded({ extended:true}))

//RUTAS
app.get('/', function (req, res) {
    //res.send('Hola mundo desde el backend');
    app.use(cliente);
    app.use(habitacion);
    app.use(reserva);
    app.use(contacto);
    app.use(login);
});




//PUERTO
app.set('puerto', process.env.PORT || 3000);
app.listen(app.get('puerto'), function () {
    console.log('el backend escucha en el puerto ' + app.get('puerto'));
});
// app.listen(3000, () => {
//     console.log("Servidor conectado con el puerto 3000");
// });