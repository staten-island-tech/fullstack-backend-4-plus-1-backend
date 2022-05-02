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

exports.updateUser = async (req, res) => {
 try {
  const user = await User.findById(req.params.id);
  const updates = Object.keys(req.body);
  updates.forEach((update) => {
   user[update] = req.body[update];
  });
  await user.save();
  res.json(user);
 } catch (error) {
  console.log(error);
 }
};

exports.removeUser = async (req, res) => {
 try {
  const user = await User.findByIdAndDelete(req.params.id);
  if (!user) {
   res.status(404).send();
  }
  res.send(`${user.name} was deleted from the DB`);
 } catch (error) {
  console.log(error);
 }
};