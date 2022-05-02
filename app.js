const express = require("express");
const port = process.env.Port || 8080;
const app = express();
require("./DB/mongoose");
const routes = require("./Routes/index");

//takes the raw request and turns them into usable properties on req.body
app.use(express.json());
app.use(express.urlencoded());

app.use("/", routes);
app.listen(port, () => {
 console.log(`server is up on ${port}`);
});
