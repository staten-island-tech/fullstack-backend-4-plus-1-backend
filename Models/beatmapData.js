const mongoose = require("mongoose");
const slugify = require("slugify");

const BeatmapSchema = new mongoose.Schema({
 type: String,
 trim: false,
 slug: String,
});

BeatmapSchema.pre("save", function (next) {
 if (!this.isModified("name")) {
  next();
  return;
 }
 this.slug = slugify(this.name);
 next();
});

module.exports = mongoose.model("beatmaps", BeatmapSchema);
