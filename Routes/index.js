const express = require("express");
const router = new express.Router();
const leaderBoardController = require("../Controllers/leaderBoardController");
const authController = require("../Controllers/authMiddleWare");

router.get("/:id", leaderBoardController.getUser);

router.get(
 "/auth",
 authController.authMiddleware,
 authController.authPage
);

router.post("/add", leaderBoardController.createUser);
router.patch("/user/:id", leaderBoardController.updateUser);
router.delete("/user/:id", leaderBoardController.removeUser);

module.exports = router;
