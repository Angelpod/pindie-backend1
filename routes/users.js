// routes/users.js 
const usersRouter = require('express').Router();
const { checkAuth } = require("../middlewares/auth.js");
const { sendMe } = require("../controllers/users.js")
const { 
  createUser,
  findAllUsers,
  findUserById,
  updateUser,
  deleteUser,
  checkIsUserExists,
  checkEmptyNameAndEmailAndPassword,
  checkEmptyNameAndEmail ,
  hashPassword
 } = require('../middlewares/users');
const{ sendUserCreated,
 sendUserById ,
 sendUserDeleted,
sendUserUpdated ,
sendAllUsers} = require('../controllers/users');
// routes/users.js
usersRouter.get("/users", findAllUsers, sendAllUsers);
usersRouter.post(
  "/users",
  findAllUsers,
  checkIsUserExists,
  checkEmptyNameAndEmailAndPassword,
  hashPassword,
  createUser,
  sendUserCreated,
  checkAuth
);

usersRouter.put(
  "/users/:id",
  checkEmptyNameAndEmail,
  updateUser,
  sendUserUpdated,
  checkAuth
);
usersRouter.get("/users/:id", findUserById, sendUserById);
usersRouter.get("/me", checkAuth, sendMe);
usersRouter.delete( 
   "/users/:id",
deleteUser,
sendUserDeleted,
checkAuth
);
module.exports = usersRouter;