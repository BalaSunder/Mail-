const nodemailer = require('nodemailer');

let mailTransporter = nodemailer.createTransport({
    service: "gmail",
    auth:{
        user: "balasunder131121@gmail.com",
        pass: "Balan@12"
    },
});

let details = {
    from: "balasunder131121@gmail.com",
    to: "abhiandhraghavan10@gmail.com",
    subject: "testing our nodemailer",
    text: "testing out it once again"
};

mailTransporter.sendMail(details,(err)=>{
    if(err){
        console.log("it has an error",err)
    }
    else{
        console.log("email has send!")
    }
});