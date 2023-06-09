const cars=require('../models/carsReports.model') 
function catchErrore(service){
    return(req,res,next)=>{
        service(req,res).catch((err)=>{
            next(err)
    })
}
}

module.exports.addReport=catchErrore(async (req,res)=>{
    const{rebortNum,dateof,full_name,email,idNumber,userId,dwescribtio,brand,model,licenPlate,color,state}=req.body
    const user=await cars.insertMany({rebortNum,dateof,email,full_name,idNumber,userId,dwescribtio,brand,model,licenPlate,color,state})
    res.json({message:"success",user})

})

module.exports.getAllCarsReports=catchErrore(async(req,res)=>{
    const report=await cars.find()
    res.json({message:"success",report})
})


module.exports.getUserReport=catchErrore(async(req,res)=>{
    const{email}=req.params
    const userReport=await cars.find({email})
    if(userReport)
    {
        res.json({message:'success',userReport})
    }else
    {
        res.json({message:`this user didn't make any reports`})
    }

}) 
module.exports.updateReportState=catchErrore(async (req,res)=>{
    const{_id,state}=req.body
    const newState= await cars.findByIdAndUpdate({_id},{state})
    res.json({message:'success',newState})
})
module.exports.deletReport=catchErrore(async (req,res)=>{
    const{_id}=req.body
    const deletedReport= await cars.findByIdAndDelete(_id)
    res.json({message:'success',deletedReport})
})
