// const express = require("express");
// const port = process.env.Port || 8090;
// const app = express();
// require("./DB/mongoose");
// const routes = require("./Routes/index");
// const jwt = require("express-jwt");
// const jwksRsa = require("jwks-rsa");
// // auth router attaches /login, /logout, and /callback routes to the baseURL


// //takes the raw request and turns them into usable properties on req.body
// app.use(express.json());
// app.use(express.urlencoded());
// app.use(function (req, res, next) {
//  res.setHeader("Access-Control-Allow-Origin", "*");
//  res.setHeader(
//   "Access-Control-Allow-Methods",
//   "GET, POST, PUT, DELETE"
//  );
//  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
//  res.setHeader("Access-Control-Allow-Credentials", true);
//  next();
// });

// const checkJwt = jwt({
//     // Dynamically provide a signing k`ey based on the kid in the header and the signing keys provided by the JWKS endpoint
//     secret: jwksRsa.expressJwtSecret({
//       cache: true,
//       rateLimit: true,
//       jwksRequestsPerMinute: 5,
//       jwksUri: `https://dev-2szf794g.us.auth0.com/.well-known/jwks.json`,
//     }),
  
//     // Validate the audience and the issuer
//     audience: "http://localhost:6000", //replace with your API's audience, available at Dashboard > APIs
//     issuer: "https://dev-2szf794g.us.auth0.com/",
//     algorithms: ["RS256"],
//   });
  
// app.get("/authorized", checkJwt, async function (req, res) {
//     try {
//       console.log(req.user);
//       res.json(req.user);
//     } catch (error) {
//       console.log(error);
//     }
//   });
//   app.get("/", async function (req, res) {
//     try {
//       res.json("Secured Resource");
//     } catch (error) {
//       console.log(error);
//     }
//   });

// app.use("/", routes);
const express = require("express");
const port = process.env.PORT || 3000;
const app = express();
const jwt = require("express-jwt");
const jwksRsa = require("jwks-rsa");
const cors = require("cors");
require("./db/mongoose"); //ensures mongoose runs and connects
//const routes = require("./Routes/index");
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// Create middleware for checking the JWT
const checkJwt = jwt({
  // Dynamically provide a signing key based on the kid in the header and the signing keys provided by the JWKS endpoint
  secret: jwksRsa.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: `https://dev-2szf794g.us.auth0.com/.well-known/jwks.json`,
  }),

  // Validate the audience and the issuer
  audience: "http://localhost:6000", //replace with your API's audience, available at Dashboard > APIs
  issuer: "https://dev-2szf794g.us.auth0.com/",
  algorithms: ["RS256"],
});

// Enable the use of request body parsing middleware - code omitted

// create timesheets API endpoint - code omitted
app.get("/authorized", checkJwt, async function (req, res) {
  try {
    console.log(req.user);
    res.json(req.user);
  } catch (error) {
    console.log(error);
  }
});
app.get("/", async function (req, res) {
  try {
    res.json("Secured Resource");
  } catch (error) {
    console.log(error);
  }
});

app.listen(port, () => {
 console.log(`server is up on ${port}`);
});


