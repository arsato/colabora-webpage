const express = require("express");
const colabora = require("../controllers/colabora.controllers");
const { validateToken } = require("../middleware/middleware");
const router = express.Router();
require("dotenv").config();


module.exports = app => {

    router.get("/", (req, res) => {
        res.json({ message: "Welcome to colabora backend v2" });
      });
    router.post("/users", colabora.createUser);
    router.get("/users", colabora.findAllUsers);
    router.get("/users/:id", colabora.findUserByPk);
    //router.get("/users/:id", colabora.findUserAdditional);
    router.get("/additional", colabora.findAllAdditional)
    router.get("/blog", colabora.findAllBlogPosts);
    router.post("/blog", colabora.createBlogPost);
    router.patch("/users/:id", colabora.updateAdditionalInfo);
    router.post("/login", colabora.loginVerify)

    app.use(router)
}