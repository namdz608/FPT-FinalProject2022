const express =  require('express');
const AdminController = require('../controller/AdminController');
let router = express.Router();

let initWebRoute=(app)=>{
    router.get('/api/user/list',AdminController.getAllUsers)
    router.post('/api/user',AdminController.CreateANewUser);
    router.put('/api/edit-user',AdminController.EditUser);
    router.delete('/api/delete-user',AdminController.DeleteUser);
    router.post('/api/login',AdminController.LoginUser)
    return app.use('/',router);
}
module.exports = initWebRoute;