const express = require("express");
const reservaRoute = express.Router();


let reservaModel = require("../models/reservas");

// GET  reserva
reservaRoute.route("/").get((req, res) => {
    reservaModel.find((error, data, next) => {
        if (error) {
            return next(error);
        } else {
            console.log(error);
            res.json(data);
        }
    }).populate('datosCliente infoHabitacion');
});


// POST reserva
reservaRoute.route("/add").post((req, res, next) => {
    reservaModel.create(req.body, (error, data) => {
        if (error) {
            return next(error);
        } else {
            console.log(data);
            res.json(data);
        }
    });
});

// GET BY id reserva
reservaRoute.route("/edit-client/:id").get((req, res) => {
    reservaModel.findById(req.params.id, (error, data, next) => {
        if (error) {
            console.log(error);
            return next(error);
        } else {
            res.json(data);
        }
    });
});

//PUT reserva
reservaRoute.route("/update-client/:id").put((req, res, next) => {
    reservaModel.findByIdAndUpdate(
        req.params.id,
        {
            $set: req.body,
        },
        (error, data) => {
            if (error) {
                console.log(error);
                return next(error);
            } else {
                res.json(data);
                console.log("Reserve successfully updated!");
            }
        }
    );
});

//DELETE reserva
reservaRoute.route("/delete/:id").delete((req, res, next) => {
    reservaModel.findByIdAndRemove(req.params.id, (error, data) => {
        if (error) {
            return next(error);
        } else {
            res.status(200).json({
                msg: data,
            });
        }
    });
});

module.exports = reservaRoute;