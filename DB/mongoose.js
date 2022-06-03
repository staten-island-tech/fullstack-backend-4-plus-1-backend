const mongoose = require("mongoose");
require("dotenv").config({ path: ".env" });

mongoose
 .connect(`${process.env.DATABASE}`, {
  //
  useNewUrlParser: true,
  useUnifiedTopology: true,
 })
 .then(() => console.log("conected to DB"));

mongoose.connection.on("error", (err) => {
 console.log(`${err.message}`);
});
