const express = require("express");
const habitacionRoute = express.Router();

let habitacionModel = require("../models/habitaciones");

// GET habitación
habitacionRoute.route("/").get((req, res) => {
    habitacionModel.find((error, data, next) => {
        if (error) {
            return next(error);
        } else {
            console.log(error);
            res.json(data);
        }
    });
});

// POST habitación
habitacionRoute.route("/add").post((req, res, next) => {
    habitacionModel.create(req.body, (error, data) => {
        if (error) {
            return next(error);
        } else {
            console.log(data);
            res.json(data);
        }
    });
});

// GET BY id habitación
habitacionRoute.route("/edit-client/:id").get((req, res) => {
    habitacionModel.findById(req.params.id, (error, data, next) => {
        if (error) {
            console.log(error);
            return next(error);
        } else {
            res.json(data);
        }
    });
});

//PUT habitación
habitacionRoute.route("/update-client/:id").put((req, res, next) => {
    habitacionModel.findByIdAndUpdate(
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
                console.log("Student successfully updated!");
            }
        }
    );
});

//DELETE habitación
habitacionRoute.route("/delete/:id").delete((req, res, next) => {
    habitacionModel.findByIdAndRemove(req.params.id, (error, data) => {
        if (error) {
            return next(error);
        } else {
            res.status(200).json({
                msg: data,
            });
        }
    });
});

module.exports = habitacionRoute;