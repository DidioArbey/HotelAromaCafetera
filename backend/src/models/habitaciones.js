const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let habitacionSchema = new Schema(
    {
        codHabitacion: { type: String, require: true },
        tipoHabitacion: { type: String },
        descripcion: { type: String},
        capacidadPersonas: { type: Number },
        tarifaNoche: { type: String },
        estado: { type: String},
    },
    {
        collection: "Habitaciones",
    }
);

module.exports = mongoose.model("Habitaciones", habitacionSchema);