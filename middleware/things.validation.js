const Joi = require("joi");

const schema=Joi.object({
    full_name:Joi.string().required().min(10).max(20),
    userId:Joi.string(),
    email:Joi.string().email().required(),
    idNumber:Joi.string().required(),
    phone:Joi.string().required(),
    state:Joi.string(),
    dateof:Joi.string().required(),
    rebortNum:Joi.string().required(),
    placeofresidence:Joi.string(),
    type:Joi.string(),
    dwescribtio:Joi.string().required().min(50).max(500),
})
module.exports.thingsRebortValidations=async (req,res,next)=>{
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
