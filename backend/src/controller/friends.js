
const db = require("../repositories/db");

exports.post = async (req, res, next) => {
    console.log(req.body);
    const name = req.body.name
    const result = await db.insertUser(name);
    res.status(200).send(result);
};

exports.createFriend = async (req, res, next) => {
    await db.createFriend(req.body);
    res.status(201).send('Success');
};
  
exports.getById = async(req, res, next) => {
    let id = req.params.id;
    const user = await db.selectUser(id)
    res.status(200).send(user);
};

exports.getFriends = async(req, res, next) => {
    let id = req.params.id;
    const friends = await db.findFriends(id)
    res.status(200).send(friends);
};