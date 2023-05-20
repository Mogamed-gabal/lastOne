const  mongoose  = require("mongoose");

const schema=mongoose.Schema({
    userId:String,
    email:String,
    full_name:String,
    SerialNumber:String,
    dwescribtio:String,
    brand:String,
    model:String,
    state:{
        type:String,
        default:'pending'
    }
},{
    teimestemps:true,
})
module.exports=mongoose.model('mobileReborts',schema)
