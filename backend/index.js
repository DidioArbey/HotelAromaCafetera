const express = require("express");
const morgan = require('morgan');

const app = express();
const cors = require("cors");

//MIDELWARES
app.use(morgan('tiny'));
app.use(cors());
app.use(express.json());

app.use(express.urlencoded({ extended:true}))

//RUTAS
app.get('/', function (req, res) {
    res.send('Hola mundo desde el backend');
});




//PUERTO
app.set('puerto', process.env.PORT || 3000);
app.listen(app.get('puerto'), function () {
    console.log('el backend escucha en el puerto ' + app.get('puerto'));
});
// app.listen(3000, () => {
//     console.log("Servidor conectado con el puerto 3000");
// });