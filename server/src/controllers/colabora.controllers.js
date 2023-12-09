const { models } = require("../models");
const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken');
const { handleUpload } = require("../helpers/cloudinary");
const User = models.User;
const Blog = models.Blog;
const AdditionalInfo = models.AdditionalInfo;

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
      res.status(201).send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while creating the User.",
      });
    });
};

exports.findUserByEmail = (req, res) => {
  const userEmail = req.body.email;
  User.findOne({ where: { email: userEmail } })
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
      token = jwt.sign(
        { userEmail},
        process.env.TOKEN_SECRET
      );
      res.status(201).send({ token: token });
    } else {
      res.status(400).send({ error: "Incorrect Password" });
    }
  } else {
    res.status(404).send({ error: "User does not exist" });
  }
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

exports.findUserAdditional = (req, res) => {
  const id = req.params.id;
  AdditionalInfo.findOne({ where: { userId: id } })
    .then((data) => {
      console.log(data)
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

exports.findAllAdditional = (req, res) => {
  AdditionalInfo.findAll()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving users.",
      });
    });
};

exports.createAdditionalInfo = (req, res) => {
  const info = {
    position: req.body.position,
    github: req.body.github,
    linkedin: req.body.linkedin,
  };

  AdditionalInfo.create(info)
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

exports.createUpload = async (req, res) => {
  try {
    const b64 = Buffer.from(req.file.buffer).toString("base64");
    let dataURI = "data:" + req.file.mimetype + ";base64," + b64;
    var cloudinaryResponse = await handleUpload(dataURI);
  } catch (error) {
    console.log(error);
    res.send({
      message: error.message,
    });
  }
  const info = {
    userId: req.body.userId,
    position: req.body.position,
    github: `https://www.github.com/${req.body.github}`,
    linkedin: `https://www.linkedin.com/in/${req.body.linkedin}`,
    publicId: cloudinaryResponse.public_id,
    secureUrl: cloudinaryResponse.secure_url,
  };

  AdditionalInfo.create(info)
    .then((data) => {
      console.log(data);
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while creating the User.",
      });
    });
};
