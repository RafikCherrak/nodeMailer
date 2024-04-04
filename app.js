const nodeMailer = require('nodemailer')
const html = `
<h1>Hello world </h1>
<p>Isn't NodeMailer useful?</p>
`;

async function main()  {
const transporter = nodeMailer.createTransport({
    host: 'mail.openjavascript.info',
    port: 465,
    secure: true,
    auth: {
        user: 'test@openjavascript.info',
        pass: 'NodeMaile123!'
    }

})
const info = await transporter.sendMail({
    from: 'openJavaScript <test@openJavaScript.info>',
    to: 'test2@openjavascript.info',
    subject :'testing, testing, 123',
    html: html,

})
console.log("Message sent :"+ info.messageId);
console.log(info.accepted);
console.log(info.rejected);
}

main()
.catch(e => console.log(e))