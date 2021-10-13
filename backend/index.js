let express = require("express"),
    morgan = require('morgan'),
    cors = require("cors"),
    mongoose = require("mongoose"),
    database = require("./src/config/mongoBD"),
    compression = require("compression"),
    bodyParser = require("body-parser");

//import routes
const cliente = require("../backend/src/routes/clientes.routes");
const habitacion = require("./src/routes/habitaciones.routes");
const reserva = require("./src/routes/reservas.routes");
const login = require("./src/routes/login.routes");
const contacto = require("./src/routes/contantenos.routes");


const app = express();


//MIDELWARES
app.use(morgan('tiny'));
app.use(cors());
app.use(express.json());
app.use(compression());
app.use(express.urlencoded({ extended:true}));

app.use(bodyParser.json());
app.use(
    bodyParser.urlencoded({
        extended: false,
    })
);

//Cors
app.use((req, res, next)=>{
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, ContentType, Accept");
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});


// Connect mongoDB
mongoose.Promise = global.Promise;
mongoose
    .connect(database.db, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(
        () => {
            console.log("Database connected");
        },
        (error) => {
            console.log("Database could't be connected to: " + error);
        }
    );

//RUTAS
app.use('/api/cliente', cliente);
app.use('/api/reserva', reserva);
app.use('/api/habitacion', habitacion);
app.use('/api/contacto', contacto);



//PUERTO
app.set('puerto', process.env.PORT || 3000);
app.listen(app.get('puerto'), function () {
    console.log('Server started on port: ' + app.get('puerto'));
});


// app.listen(3000, () => {
//     console.log("Servidor conectado con el puerto 3000");
// });