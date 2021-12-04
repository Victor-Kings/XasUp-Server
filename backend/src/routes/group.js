const GroupController = require('../controller/group');
module.exports = (app) => {
   app.post('/group/newGroup', GroupController.NewGroup);
   app.get('/group/findGroup/:id', GroupController.findGroup);
   app.get('/group/findUserInGroup/:id', GroupController.findUserInGroup);
   app.delete('/group/findUserInGroup/:id/:group', GroupController.deleteUserFromGroup);
}
