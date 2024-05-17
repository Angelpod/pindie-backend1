// Файл routes/games.js

const gamesRouter = require('express').Router();

const{
  findGameById,
  findAllGames,
  createGame,
  updateGame,
  deleteGame ,
  checkEmptyFields,
  checkIfUsersAreSafe,
  checkIfCategoriesAvaliable,
  checkIsGameExists 
 }  = require('../middlewares/game');
const{ sendGameById ,
 sendGameCreated,
 sendGameUpdated,
sendGameDeleted } = require("../controllers/games")
gamesRouter.get("/games", findAllGames, sendAllGames);
gamesRouter.get("/games/:id", findGameById, sendGameById);
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