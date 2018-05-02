/*
Router for handling direct messages
*/
const MessageRouter = require('express').Router()
const mailer = require('../service/Mailer');
const StrBuilder = require('../logic/StrBuilder')

MessageRouter.get('/', (req, res) => {
    res.json({activeEmailAddress: "vk@vkry.info"})
})

MessageRouter.post('/', (req, res) => {
    const mailOptions = {
    from: {address: 'orja@vkry.com'},
    to: 'vk@vkry.info',
    subject: 'Yhteydenotto',
    text: StrBuilder.buildYhteydenottoString(req.body)
};


    mailer.transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent');
        }
    });

    res.json({status: 'mail sent'})
})

module.exports = MessageRouter