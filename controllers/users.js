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
  res.end({ message: "Пользователь обновлен" });
};
const sendUserDeleted = (req, res) => {
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify(req.user));
};
const sendAllUsers = (req, res) => { res.setHeader("Content-Type", "application/json"); res.end(JSON.stringify(req.usersArray)); }
module.exports = {
sendUserCreated,
sendUserById,
sendUserUpdated,
sendUserDeleted,
sendAllUsers
};