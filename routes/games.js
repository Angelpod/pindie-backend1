// Файл routes/games.js

const gamesRouter = require('express').Router();
const { checkAuth } = require("../middlewares/auth.js");
const{
  findGameById,
  findAllGames,
  createGame,
  updateGame,
  deleteGame ,
  checkEmptyFields,
  checkIfUsersAreSafe,
  checkIfCategoriesAvaliable,
  checkIsGameExists,
  checkIsVoteRequest,
 }  = require('../middlewares/game');
const{ sendGameById ,
 sendGameCreated,
 sendGameUpdated,
 sendAllGames,
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
  sendGameCreated,
  checkAuth,
);
gamesRouter.put(
  "/games/:id",
  findGameById,
  checkIsVoteRequest,
  checkIfUsersAreSafe,
  checkIfCategoriesAvaliable,
  checkEmptyFields,
  updateGame,
  sendGameUpdated,
  checkAuth
);
gamesRouter.delete(
  "/games/:id", 
  deleteGame,
  sendGameDeleted,
  checkAuth,
);
module.exports = gamesRouter;