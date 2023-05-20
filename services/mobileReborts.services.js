const Mobile=require('../models/mobileRebort.model')
function catchErrore(service){
    return(req,res,next)=>{
        service(req,res).catch((err)=>{
            next(err)
    })
}
}
module.exports.addReport=catchErrore(async (req,res)=>{
    const{full_name,email,userId,SerialNumber,dwescribtio,brand,model,state}=req.body
    const user=await Mobile.insertMany({full_name,email,userId,SerialNumber,dwescribtio,brand,model,state})
    res.json({message:"success",user})

})

module.exports.getAllMobileReports=catchErrore(async(req,res)=>{
    const report=await Mobile.find()
    res.json({message:"success",report})
})


module.exports.getUserReport=catchErrore(async(req,res)=>{
    const{email}=req.params
    const userReport=await Mobile.find({email})
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
    const newState= await Mobile.findByIdAndUpdate({_id},{state})
    res.json({message:'success',newState})
})
module.exports.deletReport=catchErrore(async (req,res)=>{
    const{_id}=req.body
    const deletedReport= await Mobile.findByIdAndDelete(_id)
    res.json({message:'success',deletedReport})
})
