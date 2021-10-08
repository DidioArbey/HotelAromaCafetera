const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let contactoSchema = new Schema(
    {
        nombreUser: { type: String },
        emailUser: { type: String },
        telefonoUser: { type: Number},
        mensajeUser: { type: String },
    },
    {
        collection: "Contactenos",
    }
);

module.exports = mongoose.model("Contactenos", contactoSchema);