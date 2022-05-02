exports.authMiddleware = async (req, res, next) => {
 if (req.body.user) {
  next();
 } else {
  res.json("signed in with your mom");
 }
};

exports.authPage = async (req, res) => {
 try {
  res.json("secret Data");
 } catch (error) {
  console.log(error);
 }
};
