const db = require("../models");
const User = db.models.Users;

exports.createUser = (req, res) => {
  if (!req.body.title) {
    res.status(400).send({
      message: "Name cannot be empty",
    });
    return;
  }

  const user = {
    firstName: req.body.firstName,
    email: req.body.email,
    password: req.body.password,
  };

  User.create(user)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while creating the User.",
      });
    });
};

exports.findAllUsers = (req, res) => {
    User.findAll()
      .then((data) => {
        res.send(data);
      })
      .catch((err) => {
        res.status(500).send({
          message: err.message || "Some error occurred while retrieving users.",
        });
      });
  };

