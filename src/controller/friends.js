const db = require("../data/db");

exports.post = async (req, res, next) => {
    console.log(req.body);
    const name = req.body.name
    await db.insertUser(name);
    res.status(201).send('Rota POST!');
};
  
exports.getById = async(req, res, next) => {
    let id = req.params.id;
    const user = await db.selectUser(id)
    res.status(200).send(`Rota GET com ID! ${id} é ${user}`);
};

exports.getFriends = async(req, res, next) => {
    let id = req.params.id;
    const friends = await db.findFriends(id)
    res.status(200).send(friends);
};