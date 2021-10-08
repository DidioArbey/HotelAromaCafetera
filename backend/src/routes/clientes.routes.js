const express = require("express");
const clienteRoute = express.Router();

// GET clientes
let clienteModel = require("../models/clientes");

clienteRoute.route("/").get((req, res) => {
    clienteModel.find((error, data, next) => {
        if (error) {
            return next(error);
        } else {
            console.log(error);
            res.json(data);
        }
    });
});

// POST clientes
clienteRoute.route("/add").post((req, res, next) => {
    clienteModel.create(req.body, (error, data) => {
        if (error) {
            return next(error);
        } else {
            console.log(data);
            res.json(data);
        }
    });
});

// GET BY id clientes
clienteRoute.route("/getID").get((req, res) => {
    clienteModel.findOne({cedula:req.body.cedula }, (error, data, next) => {
        if (error) {
            console.log(error);
            return next(error);
        } else {
            res.json(data);
        }
    });
});

//PUT cliente
clienteRoute.route("/update").put((req, res, next) => {
    var cedulaId = req.body.cedula;
    clienteModel.findOneAndUpdate(
        cedulaId,
        {
            $set: req.body,
        },
        (error, data) => {
            if (error) {
                console.log(error);
                return next(error);
            } else {
                res.json(data);
                console.log("Client successfully updated!");
            }
        }
    );
});

//DELETE Cliente
clienteRoute.route("/delete").delete((req, res, next) => {
    var cedulaId = req.body.cedula;
    clienteModel.findOneAndDelete(cedulaId, (error, data) => {
        if (error) {
            return next(error);
        } else {
            res.status(200).json({
                msg: data,
            });
        }
    });
});

module.exports = clienteRoute;