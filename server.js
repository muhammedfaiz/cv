var express = require('express');
var app=express()
var bodyParser=require('body-parser')
var transporter=require('./email_config')

app.set('view engine','ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json())


app.get('/',(req,res)=>{
    res.render('index')
})

app.post('/',(req,res)=>{
    
    var name=req.body.name;
    var email=req.body.email;
    var mobile=req.body.mobile;
    var subject=req.body.subject;
    var message=req.body.message;
    console.log(String(message))
    var mailOptions = {
        from:'faizu6587@gmail.com',
        to:'faizmuhammed342@gmail.com',
        subject:subject,
        text:`Name:${name}\nEmail:${email}\nMobile:${mobile}\nMessage:${message}`
    }
    transporter.sendMail(mailOptions,function(error,info){
        if(error){
            console.log(error)
        }else{
            console.log('email sent:'+info.response);
        }
    });
    res.redirect('/');
});


app.listen(5000);