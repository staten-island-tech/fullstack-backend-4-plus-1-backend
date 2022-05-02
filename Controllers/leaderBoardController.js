const User = require("../Models/leaderBoard");
exports.leaderBoard = async (req, res) => {
 const users = ["harvey, jajadiff, yourmom, JOY"];
 try {
  console.log(req.name);
  res.json(users);
 } catch (error) {
  console.log(error);
 }
};

exports.createUser = async (req, res) => {
 try {
  const user = new User(req.body);
  await user.save();
  res.json(user);
 } catch (error) {
  res.status(500).json(error);
 }
};

exports.getUser = async (req, res) => {
 try {
  const Users = await User.find(); //.limit(5) for limio
  res.json(Users);
 } catch (error) {
  res.status(500).json(error);
 }
};
