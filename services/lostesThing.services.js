const Things=require('../models/losteed.models')
function catchErrore(service){
    return(req,res,next)=>{
        service(req,res).catch((err)=>{
            next(err)
})
}
}
module.exports.addReport=catchErrore(async (req,res)=>{
    const{full_name,email,userId,idNumber,placeofresidence,phone,dwescribtio,type,state}=req.body
    const user=await Things.insertMany({dateof,placeofresidence,full_name,email,userId,idNumber,phone,dwescribtio,type,state})
    res.json({message:"success",user})

})

module.exports.getAllThingsReports=catchErrore(async(req,res)=>{
    const report=await Things.find()
    res.json({message:"success",report})
})


module.exports.getUserReport=catchErrore(async(req,res)=>{
    const{email}=req.params
    const userReport=await Things.find({email})
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
    const newState= await Things.findByIdAndUpdate({_id},{state})
    res.json({message:'success',newState})
})
module.exports.deletReport=catchErrore(async (req,res)=>{
    const{_id}=req.body
    const deletedReport= await Things.findByIdAndDelete(_id)
    res.json({message:'success',deletedReport})
})
