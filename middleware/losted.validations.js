const Joi = require("joi");

const schema=Joi.object({
    email:Joi.string().required().email(),
    fullName:Joi.string().required(),
    phone_number:Joi.string().required(),
    overviwe:Joi.string().required().min(50).max(500),
    chieldAge:Joi.string().required(),
    //  img:Joi.string().required(),
   
    
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