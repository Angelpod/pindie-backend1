// controllers/users.js
const sendUserById = (req, res) => {
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify(req.user));
};
const sendUserCreated = (req, res) => {
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify(req.user));
};
const sendUserUpdated = (req, res) => {
  res.setHeader("Content-Type", "application/json");
  res.send({ message: "Пользователь обновлен" });
};
const sendUserDeleted = (req, res) => {
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify(req.user));
};
const sendAllUsers = (req, res) => { res.setHeader("Content-Type", "application/json"); res.end(JSON.stringify(req.usersArray)); }
const sendMe = (req, res) => {
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify(req.user));
};

module.exports = {
sendUserCreated,
sendUserById,
sendUserUpdated,
sendUserDeleted,
sendAllUsers,
sendMe
};