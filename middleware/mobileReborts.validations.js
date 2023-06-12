const Joi = require("joi");

const schema=Joi.object({
    full_name:Joi.string().required().min(10).max(20),
    email:Joi.string().email().required(),
    SerialNumber:Joi.string().required(),
    brand:Joi.string().required(),
    model:Joi.string().required(),
    rebortNum:Joi.string().required(),
    state:Joi.string().required(),
    dateof:Joi.string().required(),
    dwescribtio:Joi.string().required().min(50).max(500),
    
})
module.exports.MobileRebortValidations=async (req,res,next)=>{
    let msgArray=[]
    let {error}=await schema.validate(req.body,{abortEarly:false})
    if(error)
    {
        error.details.map((err)=>{
            msgArray.push(err.message)
        })
        res.json(msgArray)
    }else
    {
        next()
    }
}
