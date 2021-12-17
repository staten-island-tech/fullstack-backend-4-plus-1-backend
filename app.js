const express = require("express"); //this file requires express
const port = process.env.PORT || 3000; //use external server port or local 3000
const app = express();  //instantiate express
const routes = require("./routes/index"); //import index from router folder


app.use("/", routes); //use the exported file exported as "router"
app.listen(port, ()=>{
    console.log(`server is up on ${port}`);
});