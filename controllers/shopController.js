exports.middlewareSample = async (req,res,next)=>{
    req.name= "TEST";
    next();
};



exports.homePage = async (req,res)=>{
    const stores = ["Dunkin", "Tim Hortons", "STarbucks"];
    try{
        console.log(req.name)
        res.json(stores)
    }catch (error) {
        console.log();
    }
};