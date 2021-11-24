const FriendsRouter = require('./friends');
const GroupRouter = require('./group');
module.exports = (app) => {
    FriendsRouter(app);
    GroupRouter(app);
}