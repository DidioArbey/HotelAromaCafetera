const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
app.listen(3000, () => {
    console.log("Servidor conectado con el puerto 3000");
});
