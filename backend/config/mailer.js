nodemailer=require('nodemailer')

transport=nodemailer.createTransport({
    host:'smtp.gmail.com',
    port:465,
    secure:true,
    auth:{
        user:'lovelysingh49178@gmail.com',
        pass:'cqrk byhp zyyg tgqj'
    }
})

mail={
from:'lovelysingh49178@gmail.com',
to: 'nand86363@gmail.com',
subject:'Booking done',
text:"Your table Booking done"
}
transport.sendMail(mail,(err,data)=>{
    if(err){
        console.log(err)
    }
    else{
        console.log(data)
    }
    })