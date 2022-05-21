const mongoose = require("mongoose");
const slugify = require("slugify");

const UserSchema = new mongoose.Schema({
 username: {
  type: String,
  trim: true,
  required: "please enter a Username",
 },
 slug: String,
 leaderBoardPos: {
  type: String,
  trim: true,
 },
 playCount: {
  type: String,
  trim: true,
 },
 accuracy: {
  type: String,
  trim: true,
 },
 performance: {
  type: String,
  trim: true,
 },
 SS: {
  type: String,
  trim: true,
 },
 S: {
  type: String,
  trim: true,
 },
 A: {
  type: String,
  trim: true,
 },
});

UserSchema.pre("save", function (next) {
 if (!this.isModified("name")) {
  next();
  return;
 }
 this.slug = slugify(this.name);
 next();
});

module.exports = mongoose.model("users", UserSchema, "users");
