const express = require("express");
const router = new express.Router(); //instantiate express router
const shopController = require("../controllers/shopController");

router.get("/", shopController.homePage);


module.exports = router;  //export file