const mongoose = require("mongoose");
require("dotenv").config({ path: "variables.env" });
const uri =
 "mongodb+srv://harveyDev:Oceantide21@cluster0.9e0na.mongodb.net/LeaderBoardDataBase?retryWrites=true&w=majority";
mongoose
 .connect(uri, {
  //`{process.env.DATABASE}`
  useNewUrlParser: true,
  useUnifiedTopology: true,
 })
 .then(() => console.log("conected to DB"));

mongoose.connection.on("error", (err) => {
 console.log(`${err.message}`);
});
