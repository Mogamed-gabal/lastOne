const  mongoose  = require("mongoose");

const schema=mongoose.Schema({
    userId:String,
    email:String,
    full_name:String,
    idNumber:String,
    dwescribtio:String,
    brand:String,
    model:String,
    licenPlate:String,
    dateof:String,
    color:String,
    state:{
        type:String,
        default:'pending'
    }
},{
    teimestemps:true,
})
module.exports=mongoose.model('carReports',schema)
