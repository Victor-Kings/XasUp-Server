const db = require("../repositories/db");

exports.NewGroup = async (req, res, next) => {
    await db.createGroup(req.body);
    res.status(201).send('Rota POST!');
};

exports.findGroup = async (req, res, next) => {
    const result = await db.findGroup(req.params.id);
    res.status(201).send(result);
};

exports.findUserInGroup = async (req, res, next) => {
    const result = await db.findUserInGroup(req.params.id);
    res.status(201).send(result);
};