const { models } = require("../models");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { handleUpload } = require("../helpers/cloudinary");
const User = models.User;
const Blog = models.Blog;
const ExtraInfo = models.ExtraInfo;

exports.createUser = (req, res) => {
  const salt = bcrypt.genSaltSync(10);
  const encryptedPassword = bcrypt.hashSync(req.body.password, salt);

  const user = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    password: encryptedPassword,
  };

  User.create(user)
    .then((data) => {
      const imageId =
        user.email.substring(0, user.email.lastIndexOf("@")) + "_profile";
      const info = {
        userId: data.userId,
        publicId: imageId,
      };
      ExtraInfo.create(info).catch((err) => {
        res.status(500).send({
          message:
            err.message ||
            "Some error occurred while creating the Additional Information.",
        });
      });

      res.status(201).send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while creating the User.",
      });
    });
};

exports.findUserByPk = (req, res) => {
  const userID = req.params.id;
  User.findByPk(userID, { include: [ExtraInfo] })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message ||
          "Some error occurred while retrieving additional info.",
      });
    });
};

exports.loginVerify = async (req, res, next) => {
  const userEmail = req.body.email;
  const userPassword = req.body.password;
  const user = await User.findOne({ where: { email: userEmail } });

  if (user) {
    const password_valid = await bcrypt.compareSync(
      userPassword,
      user.password
    );
    if (password_valid) {
      token = jwt.sign({ userEmail }, process.env.TOKEN_SECRET);
      res.status(201).send({ token: token, id: user.userId });
    } else {
      res.status(401).send({ error: "Incorrect Password" });
    }
  } else {
    res.status(404).send({ error: "User does not exist" });
  }
};

exports.findAllUsers = (req, res) => {
  User.findAll({ include: [{model: ExtraInfo}] })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving users.",
      });
    });
};

exports.findAllTeamInfo = (req, res) => {
  User.findAll({ include: [{model: ExtraInfo, attributes: { exclude: ["userId","createdAt","updatedAt","publicId"]}}], attributes: { exclude: ["email","password","userRole","createdAt","updatedAt"] } })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving users.",
      });
    });
};

exports.findUserExtra = (req, res) => {
  const id = req.params.id;
  ExtraInfo.findOne({ where: { userId: id } })
    .then((data) => {
      console.log(data);
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message ||
          "Some error occurred while retrieving additional info.",
      });
    });
};

exports.findAllBlogPosts = (req, res) => {
  Blog.findAll()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving users.",
      });
    });
};

exports.findAllExtras = (req, res) => {
  ExtraInfo.findAll()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving users.",
      });
    });
};

exports.createExtraInfo = async (req, res) => {
  const info = {
    position: req.body.position,
    github: req.body.github,
    linkedin: req.body.linkedin,
  };

  await ExtraInfo.create(info)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while creating the User.",
      });
    });
};

exports.createBlogPost = (req, res) => {
  if (!req.body.content) {
    res.status(400).send({
      message: "Content cannot be empty",
    });
    return;
  }

  const blog = {
    content: req.body.content,
  };

  Blog.create(blog)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Blog Post.",
      });
    });
};

exports.updateExtraInfo = async (req, res) => {
  const id = req.params.id;
  var info = req.body
  
  if (req.file) {
    try {
      const b64 = Buffer.from(req.file.buffer).toString("base64");
      let dataURI = "data:" + req.file.mimetype + ";base64," + b64;
      var cloudinaryResponse = await handleUpload(dataURI, req.body.imageId);
      info["publicId"] = cloudinaryResponse.public_id;
      info["secureUrl"] = cloudinaryResponse.secure_url;
    } catch (error) {
      console.log(error);
      res.send({
        message: error.message,
      });
    }
  }

  console.log(info);
  ExtraInfo.update(info, {
    where: { userId: id },
    returning:true
    })
    .then((data) => {
      console.log(data[0]);
      if (data[0] == 1) {
        res.send(
          data[1]
        );
      } else {
        res.send({
          message: `Cannot update Extra info with id=${id}. Maybe the User is not created or req.body is empty!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating Additional Info with userId=" + id,
      });
    });
};


exports.updateUser = (req, res) => {
  const id = req.params.id;
  var user = req.body;

  console.log(user)
  if(user.password){
  const salt = bcrypt.genSaltSync(10);
  const encryptedPassword = bcrypt.hashSync(req.body.password, salt);
  user["password"] = encryptedPassword;
  }

  console.log(user)
  User.update(user, {
    where: { userId: id },
    returning:true
    })
    .then((data) => {
      console.log(data[0]);
      if (data[0] == 1) {
        res.send(
          data[1]
        );
      } else {
        res.send({
          message: `Cannot update User with id = ${id}. Maybe the User is not created or req.body is empty!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating User with userId = " + id,
      });
    });
};