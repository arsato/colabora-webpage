const express = require("express");
const colabora = require("../controllers/colabora.controllers");
const router = express.Router();

router.use(express.json());

router.post("/users", colabora.createUser);
router.get("/users", colabora.findAllUsers)

module.exports = router;