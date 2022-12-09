var Users=require("./Users.json");
module.exports.getEmployees=async(req,res,next)=>{
    console.log("testing..");
    res.send(Users);
};
module.exports.getEmp=async(req,res,next)=>{
    let id=req.params.id;
    var b=Users.find(x=>x.id==id);
    res.send(b);
};
