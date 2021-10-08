const express = require("express");
const contactoRoute = express.Router();

let contactoModel = require("../models/contactenos");


// GET contacto
contactoRoute.route("/").get((req, res) => {
    contactoModel.find((error, data, next) => {
        if (error) {
            return next(error);
        } else {
            console.log(error);
            res.json(data);
        }
    });
});

// POST contacto
contactoRoute.route("/add").post((req, res, next) => {
    contactoModel.create(req.body, (error, data) => {
        if (error) {
            return next(error);
        } else {
            console.log(data);
            res.json(data);
        }
    });
});

// GET BY id contacto
contactoRoute.route("/getID/:id").get((req, res) => {
    contactoModel.findById(req.params.id, (error, data, next) => {
        if (error) {
            console.log(error);
            return next(error);
        } else {
            res.json(data);
        }
    });
});

//PUT contacto
contactoRoute.route("/update/:id").put((req, res, next) => {
    contactoModel.findByIdAndUpdate(
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
                console.log("Contact successfully updated!");
            }
        }
    );
});

//DELETE contacto
contactoRoute.route("/delete/:id").delete((req, res, next) => {
    contactoModel.findByIdAndRemove(req.params.id, (error, data) => {
        if (error) {
            return next(error);
        } else {
            res.status(200).json({
                msg: data,
            });
        }
    });
});

module.exports = contactoRoute;