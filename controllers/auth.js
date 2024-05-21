const path = require("path");
const bcrypt = require('bcryptjs');
const jwt = require("jsonwebtoken");
// controllers/auth.js
// Импорты
const users = require("../models/user")
const login = (req, res) => {
    const { email, password } = req.body;
  
    users
      .findUserByCredentials(email, password)
      .then((user) => {
          const token = jwt.sign({ _id: user._id }, "some-secret-key", {
          expiresIn: 3600
        });
        return { user, token };
      })
      .then(({ user, token }) => {
        res
          .status(200)
          .send({
              _id: user._id, 
              username: user.username, 
              email: user.email, 
              jwt: token });
            })
      // Остальной код
  };
  const sendIndex = (req, res) => {
    if (req.cookies.jwt) {
      try {
        jwt.verify(req.cookies.jwt, "some-secret-key");
        return res.sendFile(
          path.join(__dirname, "../public/admin/dashboard.html")
        );
      } catch (err) {
        res.sendFile(path.join(__dirname, "../public/index.html"));
      }
    }
    res.sendFile(path.join(__dirname, "../public/index.html"));
  };
  module.exports = { login , sendIndex};