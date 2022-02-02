const Shop = require("../models/shops");

exports.homePage = (req, res) => {
  const stores = ["Dunkin", "Tim Hortons", "Starbucks"];
  try {
    console.log(req.name);
    res.json(stores);
  } catch (error) {
    console.log();
  }
};

exports.createShop = async (req, res) => {
  try {
    const shop = new Shop(req.body);
    await shop.save();
    res.json(shop);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

exports.getshops = async (req, res) => {
  try {
    const shop = await Shop.find().limit(2);
    res.json(shops);
  } catch (error) {
    console.log(error);
  }
};

exports.updateShop = async (req, res) => {
  try {
    const shop = await shop.findbyId(req.params.id);
    const updates = Object.keys(req.body);
    updates.forEach((update) => (shop[update] = req.body[update]));
    await shop.save();
    res.json();
  } catch (error) {
    console.log(error);
  }
};
