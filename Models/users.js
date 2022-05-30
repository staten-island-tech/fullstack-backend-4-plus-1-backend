const Songs = require("../Models/songs");
// import Songs from "../Models/songs";

const mongoose = require("mongoose");
const slugify = require("slugify");

const volSettingsSchema = mongoose.Schema({
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
});

const gameScoreDataSchema = mongoose.Schema({
 song: {
  type: String,
  default: "",
 },
 leaderBoardPos: {
  type: Number,
  trim: true,
  default: 0,
 },
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
});

// const mongoose = require("mongoose");
// const Schema = mongoose.Schema;

const gameScoreDataSchema1 = mongoose.Schema({
 song: {
  type: String,
  default: "",
 },
 leaderBoardPos: {
  type: Number,
  trim: true,
  default: 0,
 },
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
});

const gameScoreDataSchema2 = mongoose.Schema({
 song: {
  type: String,
  default: "",
 },
 leaderBoardPos: {
  type: Number,
  trim: true,
  default: 0,
 },
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
});
const gameScoreDataSchema3 = mongoose.Schema({
 song: {
  type: String,
  default: "",
 },
 leaderBoardPos: {
  type: Number,
  trim: true,
  default: 0,
 },
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
});

const gameScoreDataSchema4 = mongoose.Schema({
 song: {
  type: String,
  default: "",
 },
 leaderBoardPos: {
  type: Number,
  trim: true,
  default: 0,
 },
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
});
const gameScoreDataSchema5 = mongoose.Schema({
 song: {
  type: String,
  default: "",
 },
 leaderBoardPos: {
  type: Number,
  trim: true,
  default: 0,
 },
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
});
const gameScoreDataSchema6 = mongoose.Schema({
 song: {
  type: String,
  default: "",
 },
 leaderBoardPos: {
  type: Number,
  trim: true,
  default: 0,
 },
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
});
const gameScoreDataSchema7 = mongoose.Schema({
 song: {
  type: String,
  default: "",
 },
 leaderBoardPos: {
  type: Number,
  trim: true,
  default: 0,
 },
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
});
const gameScoreDataSchema8 = mongoose.Schema({
 song: {
  type: String,
  default: "",
 },
 leaderBoardPos: {
  type: Number,
  trim: true,
  default: 0,
 },
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
});
const gameScoreDataSchema9 = mongoose.Schema({
 song: {
  type: String,
  default: "",
 },
 leaderBoardPos: {
  type: Number,
  trim: true,
  default: 0,
 },
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
});
const gameScoreDataSchema10 = mongoose.Schema({
 song: {
  type: String,
  default: "",
 },
 leaderBoardPos: {
  type: Number,
  trim: true,
  default: 0,
 },
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
});
const gameScoreDataSchema11 = mongoose.Schema({
 song: {
  type: String,
  default: "",
 },
 leaderBoardPos: {
  type: Number,
  trim: true,
  default: 0,
 },
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
});
const gameScoreDataSchema12 = mongoose.Schema({
 song: {
  type: String,
  default: "",
 },
 leaderBoardPos: {
  type: Number,
  trim: true,
  default: 0,
 },
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
});
const gameScoreDataSchema13 = mongoose.Schema({
 song: {
  type: String,
  default: "",
 },
 leaderBoardPos: {
  type: Number,
  trim: true,
  default: 0,
 },
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
});
const gameScoreDataSchema14 = mongoose.Schema({
 song: {
  type: String,
  default: "",
 },
 leaderBoardPos: {
  type: Number,
  trim: true,
  default: 0,
 },
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
});
const gameScoreDataSchema15 = mongoose.Schema({
 song: {
  type: String,
  default: "",
 },
 leaderBoardPos: {
  type: Number,
  trim: true,
  default: 0,
 },
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
});
const gameScoreDataSchema16 = mongoose.Schema({
 song: {
  type: String,
  default: "",
 },
 leaderBoardPos: {
  type: Number,
  trim: true,
  default: 0,
 },
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
});

const gameScoreDataSchema17 = mongoose.Schema({
 song: {
  type: String,
  default: "",
 },
 leaderBoardPos: {
  type: Number,
  trim: true,
  default: 0,
 },
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
});
const gameScoreDataSchema18 = mongoose.Schema({
 song: {
  type: String,
  default: "",
 },
 leaderBoardPos: {
  type: Number,
  trim: true,
  default: 0,
 },
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
});
const gameScoreDataSchema19 = mongoose.Schema({
 song: {
  type: String,
  default: "",
 },
 leaderBoardPos: {
  type: Number,
  trim: true,
  default: 0,
 },
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
});
const gameScoreDataSchema20 = mongoose.Schema({
 song: {
  type: String,
  default: "",
 },
 leaderBoardPos: {
  type: Number,
  trim: true,
  default: 0,
 },
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
});
const gameScoreDataSchema21 = mongoose.Schema({
 song: {
  type: String,
  default: "",
 },
 leaderBoardPos: {
  type: Number,
  trim: true,
  default: 0,
 },
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
});
const gameScoreDataSchema22 = mongoose.Schema({
 song: {
  type: String,
  default: "",
 },
 leaderBoardPos: {
  type: Number,
  trim: true,
  default: 0,
 },
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
});
const gameScoreDataSchema23 = mongoose.Schema({
 song: {
  type: String,
  default: "",
 },
 leaderBoardPos: {
  type: Number,
  trim: true,
  default: 0,
 },
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
});
const gameScoreDataSchema24 = mongoose.Schema({
 song: {
  type: String,
  default: "",
 },
 leaderBoardPos: {
  type: Number,
  trim: true,
  default: 0,
 },
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
});
const songsLeaderboard = new mongoose.Schema({
 song1: {
  type: gameScoreDataSchema1,
 },
 song2: {
  type: gameScoreDataSchema2,
 },
 song3: {
  type: gameScoreDataSchema3,
 },
 song4: {
  type: gameScoreDataSchema4,
 },
 song5: {
  type: gameScoreDataSchema5,
 },
 song6: {
  type: gameScoreDataSchema6,
 },
 song7: {
  type: gameScoreDataSchema7,
 },
 song8: {
  type: gameScoreDataSchema8,
 },
 song9: {
  type: gameScoreDataSchema9,
 },
 song10: {
  type: gameScoreDataSchema10,
 },
 song11: {
  type: gameScoreDataSchema11,
 },
 song12: {
  type: gameScoreDataSchema12,
 },
 song13: {
  type: gameScoreDataSchema13,
 },
 song14: {
  type: gameScoreDataSchema14,
 },
 song15: {
  type: gameScoreDataSchema15,
 },
 song16: {
  type: gameScoreDataSchema16,
 },
 song17: {
  type: gameScoreDataSchema17,
 },
 song18: {
  type: gameScoreDataSchema18,
 },
 song19: {
  type: gameScoreDataSchema19,
 },
 song20: {
  type: gameScoreDataSchema20,
 },
 song21: {
  type: gameScoreDataSchema21,
 },
 song22: {
  type: gameScoreDataSchema22,
 },
 song23: {
  type: gameScoreDataSchema23,
 },
 song24: {
  type: gameScoreDataSchema24,
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

 allSongs: {
  type: songsLeaderboard,
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
