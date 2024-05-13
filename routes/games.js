// Файл routes/games.js

const gamesRouter = require('express').Router();

const findGameBuId = require('../middlewares/game');
const sendGameById = require('../controllers/games');
const findAllGames = require('../middlewares/game');
const createGame = require('../middlewares/game');
const sendGameCreated = require('../controllers/games');
const  updateGame= require('../middlewares/game');
const sendGameUpdated = require('../controllers/games');
const deleteGame = require('../middlewares/game');
const sendGameDeleted = require('../controllers/games');
const checkEmptyFields = require('../middlewares/game');
const checkIfUsersAreSafe = require('../middlewares/game');
const checkIfCategoriesAvaliable = require('../middlewares/game')
const checkIsGameExists = require('../middlewares/game')
gamesRouter.get("/games/:id", findGameBuId, sendGameById);
gamesRouter.post(
  "/games",
  findAllGames,
  checkIsGameExists,
  checkIfCategoriesAvaliable,
  checkEmptyFields,
  createGame,
  sendGameCreated
);

gamesRouter.put(
  "/games/:id",
  findGameBuId,
  checkIfUsersAreSafe,
  checkIfCategoriesAvaliable,
  checkEmptyFields,
  updateGame,
  sendGameUpdated
);
gamesRouter.delete(
  "/games/:id", 
  deleteGame,
  sendGameDeleted 
);
module.exports = gamesRouter;