

const { crimialrecordsValidations } = require('../middleware/criminalRecords.validations')
const { haveAset, getAllSets, getUserCriminalRecord } = require('../services/criminalrecords.services')

const app=require('express').Router()
app.get('/getUserReport/:email',getUserCriminalRecord)
app.post('/takeAnum',haveAset)
app.get('/getAllSets ',getAllSets)







module.exports=app