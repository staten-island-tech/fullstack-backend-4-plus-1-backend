const express = require("express");
const router = new express.Router(); //instantiate express router
const shopController = require("../controllers/shopController");

router.get("/", shopController.getshops);
router.post("add", shopController.createShop);
router.patch("/shop/:id", shopController.updateShop);

module.exports = router; //export file
