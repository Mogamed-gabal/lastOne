const { carRebortValidations } = require('../middleware/carRebort.validation')
const { addReport, getAllCarsReports, getUserReport, updateReportState, deletReport } = require('../services/carsReports.services')
const app=require('express').Router()


app.post('/addReport',carRebortValidations,addReport)
app.get('/getAllCarsReports',getAllCarsReports)
app.get('/getUserReport/:email',getUserReport)
app.delete('/deletReport',deletReport)
app.put('/updateReportState',updateReportState)


module.exports=app