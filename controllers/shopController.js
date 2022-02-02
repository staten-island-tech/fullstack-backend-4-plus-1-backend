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
    res.status(500).json(error);
  }
};

exports.getShops = async (req, res) => {
  try {
    const shops = await Shop.find().limit(2);
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
    res.json(shop);
  } catch (error) {
    console.log(error);
  }
};

exports.deleteShop = async (req, res) => {
  try {
    const shop = await shop.findbyIdandDelete(req.params.id);
    if (!shop) {
      res.status(404).send();
    }
    res.send(`${shop} was deleted from the DB`);
  } catch (error) {
    console.log(error);
  }
};
