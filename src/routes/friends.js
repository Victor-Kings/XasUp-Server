const FriendsController = require('../controller/friends');
module.exports = (app) => {
   app.post('/user', FriendsController.post);
   app.get('/user/:id', FriendsController.getById);
   app.get('/user/friends/:id', FriendsController.getFriends);
}
