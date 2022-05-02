exports.middlewareSample = (req, res, next) => {
 req.name = "TEST";
 next();
};

exports.leaderBoard = async (req, res) => {
 const users = ["harvey, jajadiff, yourmom, JOY"];
 try {
  console.log(req.name);
  res.json(users);
 } catch (error) {
  console.log(error);
 }
};
