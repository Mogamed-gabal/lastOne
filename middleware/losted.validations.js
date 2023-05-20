const Joi = require("joi");

const schema=Joi.object({
    email:Joi.string().required().email(),
    full_name:Joi.string().required(),
    phone:Joi.string().required(),
    dwescribtio:Joi.string().required().min(50).max(500),
    type:Joi.string().required(),
     state:Joi.string().required(),
     userId:Joi.string().required(),
     idNumber:Joi.string().required(),
    
})

module.exports.lostedValidations=async (req,res,next)=>{
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