import nodemailer from 'nodemailer'

const sendEmail = async (url:string, name:string, to:string, action:string,pass:string) => {
  const transporter = await nodemailer.createTransport(
    {
        auth: {user: `${process.env.SENDER_EMAIL}`, pass: `${process.env.SENDER_PASSWORD}`},
        service: 'gmail',
        logger:false,
        debug:false,
    },
    {
        from: `Ride Tracker - 5 <${process.env.SENDER_EMAIL}>`,
    },
  );
  const messageObj = {
    to: `${name} <${to}>`,
    subject: `Ride Tracker Transport ${action}`,
    text: `Hello`,
    html: `<table border='0' cellpadding='0' cellspacing='0' width='100%' style='border-collapse:collapse; padding:0; margin:0px;'>
            <tr valign='top'>
              <td align=''>
                <table> <h2 style='color: #233862'> ${name} welcome to Ride Tracker Transport</h2> </table>
                <table> <p> We are happy that you decided to join Ride Tracker transport,
                  your account has been created successfully
                 </p> </table>
                <table> <p>You can access your account using the following credentials:<br>
                     Email: ${to} <br>
                     password: ${pass} <br>
                </p>
                <p>Follow the link to get started with <a href='${url}'>Ride Tracker</a> </p>
                </table>
                <p>For security purposes, we recommend that you change your password upon
                 your first login.If you have any difficulty accessing your account or 
                 have any questions, please do not hesitate to contact our customer
                 support team at Ride Tracker5.transporrt@gmail.com </p>

                <p>Best regards,<br>Ride Tracker Transport</p>
                
                                </td>
            </tr>
          </table>`,
  };

  const resetPasswordObject = {
    to: `${name} <${to}>`,
    subject: `Ride Tracker Transport ${action}`,
    text: `Hello`,
    html: `<table border='0' cellpadding='0' cellspacing='0' width='100%' style='border-collapse:collapse; padding:0; margin:0px;'>
            <tr valign='top'>
              <td align=''>
                <table> <h2 style='color: #233862'> ${name} Reset Password</h2> </table>
                <table> <p> You can use the link below to reset your password to Ride Tracker transport
                 </p> </table>
                <table> <p>Follow this link <a href='${url}'>${url}</a> </p></table>
                  <p>Best regards,<br>Ride Tracker Transport</p>    
            </td>
            </tr>
          </table>`,
  };
  const resetPasswordSucess = {
    to: `${name} <${to}>`,
    subject: `Ride Tracker Transport ${action}`,
    text: `Hello`,
    html: `<table border='0' cellpadding='0' cellspacing='0' width='100%' style='border-collapse:collapse; padding:0; margin:0px;'>
            <tr valign='top'>
              <td align=''>
                <table> <h2 style='color: #233862'>Your Password has been reseted successfully</h2> </table>
                <table> <p>Follow this link to login <a href='${url}'>${url}</a> </p></table>
                  <p>Best regards,<br>Ride Tracker Transport</p>    
            </td>
            </tr>
          </table>`,
  };
  if(action ==="Reset Password Link"){
    await transporter.sendMail(resetPasswordObject);
  }else if(action==="Password Reset success"){
    await transporter.sendMail(resetPasswordSucess);
  }else{
    await transporter.sendMail(messageObj);
  }
  };

  export default sendEmail;
