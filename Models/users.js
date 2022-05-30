const Songs = require("../Models/songs");
// import Songs from "../Models/songs";

const mongoose = require("mongoose");
const slugify = require("slugify");

// const volSettingsSchema = mongoose.Schema({
//  master: {
//   type: String,
//   default: "0.5",
//  },
//  music: {
//   type: String,
//   default: "0.5",
//  },
//  hitSound: {
//   type: String,
//   default: "0.2",
//  },
// });

// const userSettingsSchema = mongoose.Schema({
//  username: {
//   type: String,
//   trim: true,
//   required: "please enter a Username",
//  },
//  slug: String,
//  profilePicture: {
//   type: String,
//   default: "",
//  },
// });

// const gameSettingsSchema = mongoose.Schema({
//  scrollSpeed: {
//   type: String,
//   default: "10",
//  },
//  keys: {
//   type: String,
//   default: "",
//  },
//  pauseKey: {
//   type: String,
//   default: "",
//  },
//  restartKey: {
//   type: String,
//   default: "",
//  },
// });

// const gameScoreDataSchema = mongoose.Schema({
//  song: {
//   type: String,
//   default: "",
//  },
//  leaderBoardPos: {
//   type: Number,
//   trim: true,
//   default: 0,
//  },
//  playCount: {
//   type: Number,
//   trim: true,
//   default: 0,
//  },
//  accuracy: {
//   type: Number,
//   trim: true,
//   default: 0,
//  },
//  performance: {
//   type: Number,
//   trim: true,
//   default: 0,
//  },
//  maxCombo: {
//   type: Number,
//   trim: true,
//   default: 0,
//  },
//  SS: {
//   default: 0,
//   type: Number,
//   trim: true,
//  },
//  S: {
//   default: 0,
//   type: Number,
//   trim: true,
//  },
//  A: {
//   default: 0,
//   type: Number,
//   trim: true,
//  },
// });

// const mongoose = require("mongoose");
// const Schema = mongoose.Schema;

const UserSchema = new mongoose.Schema({
 userSettings: {
  username: {
   type: String,
   trim: true,
  },
  slug: String,
  profilePicture: {
   type: String,
   default: "",
  },
  //   default: {}
 },
 volSettings: {
  master: {
   type: String,
   default: "0.5",
  },
  music: {
   type: String,
   default: "0.5",
  },
  hitSound: {
   type: String,
   default: "0.2",
  },
 },
 gameSettings: {
  scrollSpeed: {
   type: String,
   default: "10",
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
 },

 song: {
  type: String,
  default: "",
 },
 leaderBoardPos: {
  type: Number,
  trim: true,
  default: 0,
 },

 gameData: {
  playCount: {
   type: Number,
   trim: true,
   default: 0,
  },
  accuracy: {
   type: Number,
   trim: true,
   default: 0,
  },
  performance: {
   type: Number,
   trim: true,
   default: 0,
  },
  maxCombo: {
   type: Number,
   trim: true,
   default: 0,
  },
  SS: {
   default: 0,
   type: Number,
   trim: true,
  },
  S: {
   default: 0,
   type: Number,
   trim: true,
  },
  A: {
   default: 0,
   type: Number,
   trim: true,
  },
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
