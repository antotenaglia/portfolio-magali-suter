import mail from '@sendgrid/mail';
import { config } from './config.js';
//const sendGridEmail = require('@sendgrid/mail');

mail.setApiKey(config.sendgridApiKey);

const sendEmail = async (contact_name, contact_email, contact_message) => {
  try {
    const emailOptions = {
      to: config.sendgridToMail, 
      from: config.sendgridFromMail, 
      subject: 'Nuevo mensaje desde www.magalisuter.com',
      html: `
      <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
          <html data-editor-version="2" class="sg-campaigns" xmlns="http://www.w3.org/1999/xhtml">
              <head>
                  <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
                  <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1">
                  <meta http-equiv="X-UA-Compatible" content="IE=Edge">
                  <style type="text/css">
                      body, p, div {
                        font-family: inherit;
                        font-size: 14px;
                      }
                      body {
                        color: #000000;
                      }
                      body a {
                        color: #111;
                        text-decoration: none !Important;
                      }
                      p { margin: 0; padding: 0; }
                      table.wrapper {
                        width:100% !important;
                        table-layout: fixed;
                        -webkit-font-smoothing: antialiased;
                        -webkit-text-size-adjust: 100%;
                        -moz-text-size-adjust: 100%;
                        -ms-text-size-adjust: 100%;
                      }
                      img.max-width {
                        max-width: 100% !important;
                      }
                      .column.of-2 {
                        width: 50%;
                      }
                      .column.of-3 {
                        width: 33.333%;
                      }
                      .column.of-4 {
                        width: 25%;
                      }
                      ul ul ul ul  {
                        list-style-type: disc !important;
                      }
                      ol ol {
                        list-style-type: lower-roman !important;
                      }
                      ol ol ol {
                        list-style-type: lower-latin !important;
                      }
                      ol ol ol ol {
                        list-style-type: decimal !important;
                      }
                      @media screen and (max-width:480px) {
                        .preheader .rightColumnContent,
                        .footer .rightColumnContent {
                          text-align: left !important;
                        }
                        .preheader .rightColumnContent div,
                        .preheader .rightColumnContent span,
                        .footer .rightColumnContent div,
                        .footer .rightColumnContent span {
                          text-align: left !important;
                        }
                        .preheader .rightColumnContent,
                        .preheader .leftColumnContent {
                          font-size: 80% !important;
                          padding: 5px 0;
                        }
                        table.wrapper-mobile {
                          width: 100% !important;
                          table-layout: fixed;
                        }
                        img.max-width {
                          height: auto !important;
                          max-width: 100% !important;
                        }
                        a.bulletproof-button {
                          display: block !important;
                          width: auto !important;
                          font-size: 80%;
                          padding-left: 0 !important;
                          padding-right: 0 !important;
                        }
                        .columns {
                          width: 100% !important;
                        }
                        .column {
                          display: block !important;
                          width: 100% !important;
                          padding-left: 0 !important;
                          padding-right: 0 !important;
                          margin-left: 0 !important;
                          margin-right: 0 !important;
                        }
                        .social-icon-column {
                          display: inline-block !important;
                        }
                      }
                  </style>
                    <link href="https://fonts.googleapis.com/css?family=Chivo&display=swap" rel="stylesheet"><style>
                    body {font-family: 'Chivo', sans-serif;}
                  </style>
              </head>
              <body>
                <center class="wrapper" data-link-color="#1188E6" data-body-style="font-size:14px; font-family:inherit; color:#000000; background-color:#FFFFFF;">
                <div class="webkit">
                    <table cellpadding="0" cellspacing="0" border="0" width="100%" class="wrapper" bgcolor="#FFFFFF">
                        <tr>
                            <td valign="top" bgcolor="#FFFFFF" width="100%">
                            <table width="100%" role="content-container" class="outer" align="center" cellpadding="0" cellspacing="0" border="0">
                            <tr>
                                <td width="100%">
                                  <table width="100%" cellpadding="0" cellspacing="0" border="0">
                                    <tr>
                                    <td>
                                <table width="100%" cellpadding="0" cellspacing="0" border="0" style="width:100%; max-width:600px;" align="center">
                                    <tr>
                                    <td role="modules-container" style="padding:0px 0px 0px 0px; color:#000000; text-align:left;" bgcolor="#FFFFFF" width="100%" align="left"><table class="module preheader preheader-hide" role="module" data-type="preheader" border="0" cellpadding="0" cellspacing="0" width="100%" style="display: none !important; mso-hide: all; visibility: hidden; opacity: 0; color: transparent; height: 0; width: 0;">
                                    <tr>
                                      <td role="module-content">
                                        <p></p>
                                      </td>
                                    </tr>
                                </table><table border="0" cellpadding="0" cellspacing="0" align="center" width="100%" role="module" data-type="columns" style="padding:0px 0px 0px 0px;" bgcolor="#FFFFFF" data-distribution="1">
                                <tbody>
                                  <tr role="module-content">
                                    <td height="100%" valign="top"><table width="600" style="width:600px; border-spacing:0; border-collapse:collapse; margin:0px 0px 0px 0px;" cellpadding="0" cellspacing="0" align="left" border="0" bgcolor="" class="column column-0">
                                  <tbody>
                                      <tr>
                                      <td style="padding:0px;margin:0px;border-spacing:0;"><table class="wrapper" role="module" data-type="image" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-muid="00cedc83-bd19-445a-9c66-2bb531df0ee8">
                                      <tbody>
                                          <tr>
                                            <td style="font-size:6px; line-height:10px; padding:0px 0px 0px 0px;" valign="top" align="center">
                                              <img class="max-width" border="0" style="display:block; color:#000000; text-decoration:none; font-family:Helvetica, arial, sans-serif; font-size:16px; max-width:100% !important; width:100%; height:auto !important;" width="600" alt="" data-proportionally-constrained="true" data-responsive="true" src="http://cdn.mcauto-images-production.sendgrid.net/8317240e7704f172/71f65371-9dab-41e7-8179-09673f581560/875x68.png">
                                            </td>
                                            <tr>
                                            <td style="padding:0px 0px 12px 0px;" bgcolor="#ffffff"></td>
                                          </tr>
                                      </tbody>
                                      </table></td>
                                              </tr>
                                            </tbody>
                                          </table></td>
                                            </tr>
                                          </tbody>
                                        </table><table border="0" cellpadding="0" cellspacing="0" align="center" width="100%" role="module" data-type="columns" style="padding:10px 30px 30px 30px;" bgcolor="#642929" data-distribution="1">
                                          <tbody>
                                            <tr role="module-content">
                                              <td height="100%" valign="top"><table width="520" style="width:520px; border-spacing:0; border-collapse:collapse; margin:0px 10px 0px 10px;" cellpadding="0" cellspacing="0" align="left" border="0" bgcolor="" class="column column-0">
                                            <tbody>
                                              <tr>
                                                <td style="padding:0px;margin:0px;border-spacing:0;"><table class="module" role="module" data-type="text" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-muid="b16a4afb-f245-4156-968e-8080176990ea.2" data-mc-module-version="2019-10-22">
                                        </table><table class="module" role="module" data-type="text" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-muid="b16a4afb-f245-4156-968e-8080176990ea.2.1" data-mc-module-version="2019-10-22">
                                          <tbody>
                                            <tr>
                                              <td style="padding:15px 0px 0px 0px; line-height:22px; text-align:inherit;" height="100%" valign="top" role="module-content"><div><div style="font-family: inherit; text-align: center"><span style="color: #ffffff; font-size: 18px"><strong>Hola Magalí, tienes un nuevo mensaje desde el formulario de contacto de tu sitio web:</strong></span></div>
                                              <div style="font-family: inherit; text-align: center"><br></div><div></div></div></td>
                                            </tr>
                                          </tbody>
                                        </table><table class="module" role="module" data-type="text" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-muid="b16a4afb-f245-4156-968e-8080176990ea.1" data-mc-module-version="2019-10-22">
                                          <tbody>
                                            <tr>
                                              <td style="padding:20px; line-height:22px; text-align: inherit; background-color:#ffffff;" height="100%" valign="top" bgcolor="#ffffff" role="module-content"><div><div style="font-family: inherit; text-align: inherit"><span style="color: #000000; background-color: rgb(255, 255, 255); font-size: 14px"><strong>Nombre: </strong><p style="display: inline;">${contact_name}</p></span></div>
                                              <div style="font-family: inherit; text-align: inherit"><br></div>
                                              <div style="font-family: inherit; text-align: inherit"><span style="color: #000000; background-color: rgb(255, 255, 255); font-size: 14px"><strong>Email: </strong><p style="display: inline; text-decoration: none; color: #863974;">${contact_email}</p></span></div>
                                              <div style="font-family: inherit; text-align: inherit"><br></div>
                                              <div style="font-family: inherit; text-align: inherit"><span style="color: #000000; background-color: rgb(255, 255, 255); font-size: 14px"><strong>Mensaje: </strong><p style="display: inline;">${contact_message}</p></span></div><div></div></div></td>
                                            </tr>
                                          </tbody>
                                        </table></td>
                                              </tr>
                                            </tbody>
                                          </table></td>
                                            </tr>
                                          </tbody>
                                        </table><table class="module" role="module" data-type="divider" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-muid="38ec2680-c847-4765-8c5f-aa2aba19a2b3.1">
                                          <tbody>
                                            <tr>
                                              <td style="padding:0px 0px 0px 0px;" role="module-content" height="100%" valign="top" bgcolor="">
                                                <table border="0" cellpadding="0" cellspacing="0" align="center" width="100%" height="12px" style="line-height:12px; font-size:12px;">
                                                  <tbody>
                                                    <tr>
                                                      <td style="padding:0px 0px 12px 0px;" bgcolor="#ffffff"></td>
                                                    </tr>
                                                  </tbody>
                                                </table>
                                              </td>
                                            </tr>
                                          </tbody>
                                        </table><table class="wrapper" role="module" data-type="image" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-muid="7a8a420f-bc0f-4307-bd09-412a5ff00998">
                                          <tbody>
                                            <tr>
                                              <td style="font-size:6px; line-height:10px; padding:0px 0px 0px 0px;" valign="top" align="center">
                                                <img class="max-width" border="0" style="display:block; color:#000000; text-decoration:none; font-family:Helvetica, arial, sans-serif; font-size:16px; max-width:100% !important; width:100%; height:auto !important;" width="600" alt="" data-proportionally-constrained="true" data-responsive="true" src="http://cdn.mcauto-images-production.sendgrid.net/8317240e7704f172/71f65371-9dab-41e7-8179-09673f581560/875x68.png">
                                              </td>
                                            </tr>
                                          </tbody>
                                        </table></td>
                                      </tr>
                                    </table>
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                  </table>
                </div>
              </center>
            </body>
          </html>
    `,
    }

    await mail.send(emailOptions);

    console.log('Email sent'); //acá deberia mandar un ok al user
  } catch(error) {
    console.error("Error sending message from contact form:", error);
  }
}

export default sendEmail; 


 