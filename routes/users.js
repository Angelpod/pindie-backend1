// routes/users.js 
const usersRouter = require('express').Router();

const { 
  createUser,
  findAllUsers,
  findUserById,
  updateUser,
  deleteUser,
  checkIsUserExists,
  checkEmptyNameAndEmailAndPassword,
  checkEmptyNameAndEmail 
 } = require('../middlewares/users');
const{ sendUserCreated,
 sendUserById ,
 sendUserDeleted,
sendUserUpdated ,
sendAllUsers} = require('../controllers/users');
usersRouter.post(
  "/users",
  findAllUsers,
  checkIsUserExists,
  checkEmptyNameAndEmailAndPassword,
  createUser,
  sendUserCreated
);

usersRouter.put(
  "/users/:id",
  checkEmptyNameAndEmail,
  updateUser,
  sendUserUpdated
);
usersRouter.get("/users", findAllUsers, sendAllUsers);
usersRouter.get("/users/:id", findUserById, sendUserById);

usersRouter.delete( 
   "/users/:id",
deleteUser,
sendUserDeleted
);
module.exports = usersRouter;