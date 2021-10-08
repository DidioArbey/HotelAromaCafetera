const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let reservaSchema = new Schema(
    {
        numPersonas: { type: Number },
        fechaIngreso: { type: String},
        fechaSalida: { type: String },
        datosCliente: [
            {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Clientes',
            autopopulate: true,
            },
        ],
        infoHabitacion: [
            {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Habitaciones',
            autopopulate: true,
            },
        ],
    },
    {
        collection: "Reservas",
    }
);

reservaSchema.plugin(require('mongoose-autopopulate'));
module.exports = mongoose.model("Reservas", reservaSchema);