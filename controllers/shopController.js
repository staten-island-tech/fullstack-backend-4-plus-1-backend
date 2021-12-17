exports.homePage = async (req,res)=>{
    const stores = ["Dunkin", "Tim Hortons", "STarbucks"];
    try{
        res.json(stores)
    }catch (error) {
        console.log();
    }
};