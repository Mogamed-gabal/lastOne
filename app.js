const express = require('express')
const mongoose  = require('mongoose')
const app = express()
require('dotenv').config()
const port=process.env.PORT
app.use(express.json())

const cors = require('cors')
const AppError = require('./errHandler/error.handling')
app.use(cors())
app.use(express.static('uploads'))

app.use('/users',require('./apis/user.apis'))
app.use('/complains',require('./apis/complains.api'))
app.use('/lostedPeoble',require('./apis/losted.apis'))
app.use('/objects',require('./apis/objects.apis'))
app.use('/records',require('./apis/criminalRecords.api'))
app.use('/carReports',require('./apis/carsReports.apis'))
app.use('/mobileReports',require('./apis/mobileRebort.apis'))
app.use('/lostedReports',require('./apis/lostedThing.apis'))

app.all('*',(req,res,next)=>{
  let err=new Error(`can't find this route:${req.originalUrl}on server`)
    next(new AppError(`can't find this route:${req.originalUrl}on server`,404))
})
app.use((err,req,res,next)=>{
    err.statusCode=  err.statusCode||500
    res.status(err.statusCode).json({status:err.statusCode,msg:err.statusCode,err})
})
app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
mongoose.connect(process.env.CONNECTION_STRING)