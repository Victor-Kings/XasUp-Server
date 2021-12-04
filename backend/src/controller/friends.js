
const db = require("../repositories/db");

exports.post = async (req, res, next) => {
    console.log(req.body);
    const name = req.body.name
    const result = await db.insertUser(name);
    res.status(200).send(result);
};

exports.createFriend = async (req, res, next) => {
    const result = await db.createFriend(req.body);
    res.status(200).send(result);
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

exports.deleteFriends = async(req, res, next) => {
    let id = req.params.id;
    let id2 = req.params.id2;
    const friends = await db.deleteUserfriendship(id, id2)
    res.status(200).send("OK");
}