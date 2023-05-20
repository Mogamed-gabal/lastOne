const nodemailer = require("nodemailer");

module.exports.sendEmails=async (options)=>{

    let transporter = nodemailer.createTransport({
       service:"outlook",
        auth: {
          user: "egyptpolicestation@outlook.com", // generated ethereal user
          pass: "Mo01270410382", // generated ethereal password
        },
      });

       transporter.sendMail({
        from: '"policestation" <egyptpolicestation@outlook.com>', // sender address
        to: options.email, // list of receivers
        subject: "AccountVerfiction", // Subject line
        text: "Verify Your Account", // plain text body
        html:`<h1>${options.message}</h1>
        <a href='http://localhost:3000/users/verify/${options.token}'>verify your account</a> 
        `
       , // html body
      },(err,info)=>{
        if(err){
            console.log(err)
        }else
        {
            console.log(info )
        }
      });
    

}