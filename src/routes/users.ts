import express from "express";
const router = express.Router();

const { index, getItem } = require("../controllers/UserController");

router.get('/', index);

module.exports = router;
