const { MobileRebortValidations } = require('../middleware/mobileReborts.validations')
const { addReport, getUserReport, updateReportState, deletReport, getAllMobileReports } = require('../services/mobileReborts.services')
const app=require('express').Router()


app.post('/addReport',MobileRebortValidations,addReport)
app.get('/getAllMobileReports',getAllMobileReports)
app.get('/getUserReport/:email',getUserReport)
app.delete('/deletReport',deletReport)
app.put('/updateReportState',updateReportState)


module.exports=app