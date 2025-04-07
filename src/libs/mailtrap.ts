// import { MailtrapClient } from "mailtrap";
const { MailtrapClient } = require("mailtrap");
 



 
// const recipients = [
//   {
//     email: "clemar_nunes@hotmail.com",
//   }
// ];




export const sendEmail = async (to: string, subject: string, body: string) => { 
    const client = new MailtrapClient({
        token: process.env.MAILTRAP_TOKEN as string,
        testInboxId: 3561787,
        accountId: 2260091,
    });

    try {
        await client.testing.send({
            from: {name: "teste", email:"teste@hotmail.com"},
            to: [{ email: to }],
            subject,
            text: body,
            category: "Integration Test",
             
        });
        return true;  
    } catch (error) {
        console.log(error)
        return false;
    }
     

}



 
 // Looking to send emails in production? Check out our Email API/SMTP product!
// const { MailtrapClient } = require("mailtrap");

 

// const client = new MailtrapClient({
//   token: process.env.MAILTRAP_TOKEN,
//   testInboxId: 3561787,
// });

 

// export const sendEmail = async (to: string, subject: string, body: string) => { 

// await client.testing
//   .send({
//     from: {name: "eu", email: "eu@hotmail.com"},
//     to: "clemar_nunes@hotmail.com",
//     subject,
//     text: body,
//     category: "Integration Test",
//   })
//   .then(console.log, console.error);




// }
 











// export const sendEmail = async (to: string, subject: string, body: string) => {
//     const mailtrap = new MailtrapClient({
//         token: "b6bded9a6412ae1154316bc7369a8784",
//         testInboxId: 1743032321,
//     });


//     try {
        
//         await mailtrap.testing.send({ //em produção ficaria apenas mailtrap.send
//             from: { name: "Sistema", email: "clemar_nunes@hotmail.com" },
//             to: [{ email: to }],
//             subject,
//             text: body
//         });

         

         
//         return true;
//     } catch (err) {
//         console.log(err)
//         return false;
//     }
// }








 

// const TOKEN = "****8784";





// export const sendEmail = async (to: string, subject: string, body: string) => {

//   const client = new MailtrapClient({
//     token: process.env.MAILTRAP_TOKEN,
//     testInboxId: 3561787,
//     accountId: 2260091,
//   });
 
  
    
//   try {

    
//     await client.testing.send({
//       from: {name: "teste", email:"teste@hotmail.com"},
//       to: [{ email: to }],
//       subject,
//       text: body,
//       category: "Integration Test",
//     });
//     return true;  
//   }catch (error) {
//     console.log(error)
//     return false;
//   }

  
   
 


// }

 
 