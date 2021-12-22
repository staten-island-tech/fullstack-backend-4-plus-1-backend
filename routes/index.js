const express = require("express");
const router = new express.Router(); //instantiate express router
const shopController = require("../controllers/shopController");

router.get("/", shopController.middlewareSample, shopController.homePage);
router.get("/auth", shopController.authmiddleware, shopController.authPage)

module.exports = router;  //export file