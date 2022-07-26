const adminService = require('../services/adminServices');

class AdminQaController{
    CreateANewUser=async(req, res)=>{
        let message= await adminService.createNewUser(req.body)
        return res.status(200).json(message)
    }

    getAllUsers=async(req, res)=>{
        let users= await adminService.getAllUsers();
        return res.status(200).json(users);
    }

    EditUser=async(req, res)=>{
        let user= await adminService.editUser(req.body)
        return res.status(200).json(user)
    }
}
module.exports=new AdminQaController