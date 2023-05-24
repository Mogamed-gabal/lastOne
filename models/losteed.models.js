const  mongoose  = require("mongoose");

const schema=mongoose.Schema({
    userId:String,
    email:String,
    full_name:String,
    idNumber:String,
    phone:String,
    dwescribtio:String,
    placeofresidence:String,
    dateof:String,
    type:String,
    state:{
        type:String,
        default:'pending'
    }
},{
    teimestemps:true,
})
module.exports=mongoose.model('losted',schema)
