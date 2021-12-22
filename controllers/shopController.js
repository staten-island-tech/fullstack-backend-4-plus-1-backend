exports.middlewareSample = async (req,res,next)=>{
    req.name= "TEST";
    next();
};



exports.homePage =  (req,res)=>{
    const stores = ["Dunkin", "Tim Hortons", "STarbucks"];
    try{
        console.log(req.name)
        res.json(stores)
    }catch (error) {
        console.log();
    }
};

exports.authmiddleware = (req,res,next)=>{
    if(req.body.user){
        next()
    } else{
        res.json("You must be signed in");
    }
};

exports.authPage = async (req,res) =>{
    try{
        res.json("Secret Data")
    }catch(error){
        console.log(error);
    }
    };
