enum SendType{
    SMS,MAIL
}
interface MsgService{
    send:()=>void

}
class SmsService implements MsgService{
    send(){
        console.log('send sms')
    }
}
class MailService implements MsgService{
    send(){
        console.log('send sms')
    }
}
// const main =()=>{
//     // const mailService = new MsgService()
//     // mailService.send(SendType.SMS)
// }

// Dependencies inversion
const onSend=()=> {
    const msgService:MsgService = new SmsService()
}
onSend()