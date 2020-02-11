const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

// sgMail.setApiKey(sendgripAPIKey)

// sgMail.send({
//     to: "singhamritpal49@gmail.com",
//     from: "singhamritpal49@gmail.com",
//     subject: 'This is test Subject',
//     text: "I hope this works"
// })

const sendWelcomeEmail = (email , name ) => {
    sgMail.send({
        to: email,
        from: 'singhamritpal49@gmail.com',
        subject: "Thanks For Joining!",
        text: `Welcome to the app, ${name}. Let me know `
    })
}

const sendGoodByeEmail = (email, name ) => {
    sgMail.send({
        to: email,
        from: 'singhamritpal49@gmail.com',
        subject: "Sorry To See You Go..",
        text: `Dear ${name}, we are sorry to see you go. Let us know if there was any issue on our end `
    })
}


module.exports = {
    sendWelcomeEmail,
    sendGoodByeEmail
}