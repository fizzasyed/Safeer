const sgMail=require('@sendgrid/mail')


sgMail.setApiKey(process.env.SENDGRID)

const sendmail=(email,name)=>{
    console.log('sdasdad')
    sgMail.send({
        to:email,
        from:'arbaz.sohail@outlook.com',
        subject:'account created ',
        text:`emailis=${email}. password=${name}`
    })

}
const sendmail2=(email,name)=>{
    sgMail.send({
        to:email,
        from:'arbaz.sohail@outlook.com',
        subject:'login alert',
        text:`logged in ${name}`
    })

}
module.exports={
    sendmail,
    sendmail2
}







