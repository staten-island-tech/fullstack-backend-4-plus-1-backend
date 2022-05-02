const mongoose = require("mongoose");
const slugify = require("slugify");

const UserSchema = new mongoose.Schema({
 name: {
  type: String,
  trim: true,
  required: "please enter a Username",
 },
 slug: String,
 leaderBoardPos: {
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
module.exports = mongoose.model("user", UserSchema);
