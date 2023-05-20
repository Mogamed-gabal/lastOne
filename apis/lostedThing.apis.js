const { thingsRebortValidations } = require('../middleware/things.validation')
const { addReport, getUserReport, updateReportState, deletReport, getAllThingsReports } = require('../services/lostesThing.services')
const app=require('express').Router()


app.post('/addReport',thingsRebortValidations,addReport)
app.get('/getAllMobileReports',getAllThingsReports)
app.get('/getUserReport/:email',getUserReport)
app.delete('/deletReport',deletReport)
app.put('/updateReportState',updateReportState)


module.exports=app