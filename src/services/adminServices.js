const db = require("../models/index");
const bcrypt = require("bcryptjs");
var salt = bcrypt.genSaltSync(10);

let createNewUser = (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      //check if email is exist
      let check = await checkUserEmail(data.email);
      if (check === true) {
        resolve({
          errCode: 1,
          errMessage: "This email is already exist",
        });
      } else {
        let hashUserPass = await hashPasswords(data.password);
        await db.User.create({
          email: data.email,
          password: hashUserPass,
          fullName: data.fullName,
          address: data.address,
          phone: data.phone,
          role: data.role,
          position: data.position,
          image: data.image,
        });
        resolve({
          errCode: 0,
          errMessage: "Successfully",
        });
      }
    } catch (e) {
      reject(e);
    }
  });
};

let hashPasswords = (password) => {
  return new Promise(async (resolve, reject) => {
    try {
      var hash = await bcrypt.hashSync(password, salt);
      resolve(hash);
    } catch (e) {
      reject(e);
    }
  });
};

let checkUserEmail = (userEmail) => {
  return new Promise(async (resolve, reject) => {
    try {
      let user = await db.User.findOne({
        where: { email: userEmail },
      });
      if (user) {
        resolve(true);
      } else {
        resolve(false);
      }
    } catch (err) {
      reject(err);
    }
  });
};

let getAllUsers = async () => {
  try {
    let users = await db.User.findAll();
    if (users) {
      return {
        data: users,
        errCode: 0,
        errMessage: "Successfully",
      };
    }
  } catch (e) {
    return e;
  }
};

let editUser = async (user) => {
  try {
    let a = await db.User.findOne({
      where: { id: user.id },
      raw:false
    });
    a.email = user.email;
    a.fullName = user.fullName;
    a.address = user.address;
    a.phone = user.phone;
    a.role = user.role;
    a.image = user.image;
    a.position = user.position;
    await a.save();
    return {
      data: a,
      errCode: 0,
      errMessage: "Edit user successfully",
    };
  } catch (e) {
    return e;
  }
};

module.exports = { createNewUser, getAllUsers,editUser };
