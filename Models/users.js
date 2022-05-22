const mongoose = require("mongoose");
const slugify = require("slugify");

const volSettingsSchema = mongoose.Schema({
 master: {
  type: String,
  default: "",
 },
 music: {
  type: String,
  default: "",
 },
 hitSound: {
  type: String,
  default: "",
 },
});

const userSettingsSchema = mongoose.Schema({
 username: {
  type: String,
  trim: true,
  required: "please enter a Username",
 },
 slug: String,
 profilePicture: {
  type: String,
  default: "",
 },
});

const gameSettingsSchema = mongoose.Schema({
 scrollSpeed: {
  type: String,
  default: "",
 },
 keys: {
  type: String,
  default: "",
 },
 pauseKey: {
  type: String,
  default: "",
 },
 restartKey: {
  type: String,
  default: "",
 },
});

const gameScoreDataSchema = mongoose.Schema({
 leaderBoardPos: {
  type: String,
  trim: true,
  default: "",
 },
 playCount: {
  type: String,
  trim: true,
  default: "",
 },
 accuracy: {
  type: String,
  trim: true,
  default: "",
 },
 performance: {
  type: String,
  trim: true,
  default: "",
 },
 SS: {
  default: "",
  type: String,
  trim: true,
 },
 S: {
  default: "",
  type: String,
  trim: true,
 },
 A: {
  default: "",
  type: String,
  trim: true,
 },
});

const UserSchema = new mongoose.Schema({
 userSettings: {
  type: userSettingsSchema,
  //   default: {}
 },
 volSettings: {
  type: volSettingsSchema,
 },
 gameSettings: {
  type: gameSettingsSchema,
 },
 gameData: {
  type: gameScoreDataSchema,
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
