const db = require("../repositories/db");

exports.NewGroup = async (req, res, next) => {
    const result = await db.createGroup(req.body);
    res.status(200).send(JSON.stringify({id:result}));
};

exports.findGroup = async (req, res, next) => {
    const result = await db.findGroup(req.params.id);
    res.status(201).send(result);
};

exports.findUserInGroup = async (req, res, next) => {
    const result = await db.findUserInGroup(req.params.id);
    res.status(201).send(result);
};

exports.deleteUserFromGroup = async(req, res, next) => {
    let id = req.params.id;
    let group = req.params.group;
    const friends = await db.deleteUserofGroup(id, group)
    res.status(200).send("OK");
};