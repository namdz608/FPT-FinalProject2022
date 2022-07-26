const express =  require('express');
const AdminController = require('../controller/AdminController');
let router = express.Router();

let initWebRoute=(app)=>{
    router.get('/api/get-all-users',AdminController.getAllUsers)
    router.post('/api/create-new-user',AdminController.CreateANewUser);
    router.put('/api/edit-user',AdminController.EditUser)
    return app.use('/',router);
}
module.exports = initWebRoute;