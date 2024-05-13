// routes/users.js 
const usersRouter = require('express').Router();

const createUser = require('../middlewares/users');
const sendUserCreated = require('../controllers/users');
const findAllUsers = require('../middlewares/users');
const findUserById = require('../middlewares/users');
const sendUserById = require('../controllers/users');
const updateUser = require('../middlewares/users');
const sendUserUpdated = require('../controllers/users');
const deleteUser = require('../middlewares/users');
const sendUserDeleted = require('../controllers/users');
const checkIsUserExists = require('../middlewares/users');
const checkEmptyNameAndEmailAndPassword = require('../middlewares/users');
const checkEmptyNameAndEmail = require('../middlewares/users')
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
usersRouter.get("/users/:id", findUserById, sendUserById);

usersRouter.delete( 
   "/users/:id",
deleteUser,
sendUserDeleted
);
module.exports = usersRouter;