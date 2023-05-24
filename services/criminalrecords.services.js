const criminalrecordsModels = require("../models/criminalrecords.models");
function catchErrore(service){
    return(req,res,next)=>{
        service(req,res).catch((err)=>{
            next(err)
    })
}
}

module.exports.haveAset=catchErrore(async (req,res)=>{
    const{name,phoneNumber,secondPhoneNum,homePhone,workPhoneNum,email,numberOfRaw,national_id,referTO}=req.body
    const user=await criminalrecordsModels.insertMany({name,phoneNumber,secondPhoneNum,homePhone,referTO,workPhoneNum,email,numberOfRaw,national_id})
    res.json({message:"success",user})

})
module.exports.getAllSets=catchErrore(async(req,res)=>{

    const users=await criminalrecordsModels.find({})
    res.json({message:"data",users})
})
module.exports.getUserSet=catchErrore(async(req,res)=>{
    const{email}=req.params
    const users=await criminalrecordsModels.find({email})
    if(users)
    {
        res.json({message:"data",users})
    }else
    {
        res.json({message:"this user didn't make any action yet"})
    }
  
})
module.exports.getUserCriminalRecord=catchErrore(async(req,res)=>{
    const{email}=req.params
    const userReport=await criminalrecordsModels.find({email})
    if(userReport)
    {
        res.json({message:'success',userReport})
    }else
    {
        res.json({message:`this user didn't make any reports`})
    }

}) 

module.exports.removeSet=catchErrore(async(req,res)=>{
    const{_id}=req.body
    
    let user=await criminalrecordsModels.findByIdAndDelete({_id})
   res.json({Message:"deleted",user})

})