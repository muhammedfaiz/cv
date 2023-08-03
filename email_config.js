var nodemailer=require('nodemailer');

const transporter = nodemailer.createTransport(
    {
        service:'gmail',
        auth:{
            user:'faizu6587@gmail.com',
            pass:'yritedjibmymyevb'
        }
        
    }
)

module.exports=transporter;