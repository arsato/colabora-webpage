const express = require("express");
const colabora = require("../controllers/UserController");
const router = express.Router();

router.use(express.json());

router.post("/users", colabora.createUser);
router.get("/users", colabora.findAllUsers)

module.exports = router;