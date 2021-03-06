const FriendsController = require('../controller/friends');
module.exports = (app) => {
   app.post('/user', FriendsController.post);
   app.post('/user/createFriend', FriendsController.createFriend);
   app.get('/user/:id', FriendsController.getById);
   app.get('/user/friends/:id', FriendsController.getFriends);
   app.delete('/user/friends/:id/:id2', FriendsController.deleteFriends);
}
