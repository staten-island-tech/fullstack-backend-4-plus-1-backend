const Shop = require("../models/shops")

exports.homePage =  (req,res)=>{
    const stores = ["Dunkin", "Tim Hortons", "STarbucks"];
    try{
        console.log(req.name)
        res.json(stores)
    }catch (error) {
        console.log();
    }
};

exports.Createshop = async (req,res)=>{
    try{
        const shop= new Shop(req.body)
    }catch(error){
        res.status(500).json(error);
    }
}