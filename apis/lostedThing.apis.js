const { lostedValidations } = require('../middleware/losted.validations')
const { addReport, getUserReport, updateReportState, deletReport, getAllThingsReports } = require('../services/lostesThing.services')
const app=require('express').Router()


app.post('/addReport',lostedValidations,addReport)
app.get('/getAllMobileReports',getAllThingsReports)
app.get('/getUserReport/:email',getUserReport)
app.delete('/deletReport',deletReport)
app.put('/updateReportState',updateReportState)


module.exports=app