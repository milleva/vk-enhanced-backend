/*
Router for handling
 member applications (root) AND
 temporary tournament signups e.g. löscaba (".../loscaba")
*/
const SignupRouter = require('express').Router()
const StrBuilder = require('../logic/StrBuilder')
const mailer = require('../service/Mailer')

SignupRouter.post('/', (req, res) => {
    const mailOptions = {
        from: {address: 'orja@vkry.com'},
        to: 'vk@vkry.info',
        subject: 'Uusi jäsenhakemus',
        text: StrBuilder.buildJasenHakemusString(req.body)
    };


    mailer.transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('Jäsenhakemus sent');
        }
    });

    res.json({status: 'jasenhakemus sent'})
})

SignupRouter.post('/training', (req, res) => {
    const mailOptions = {
        from: {address: 'orja@vkry.com'},
        to: 'vk@vkry.info',
        subject: 'Uusi valmennus ilmo',
        text: JSON.stringify(req.body)
    };

    console.log(JSON.stringify(req.body))

    mailer.transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('valmennushakemus sent');
        }
    });

    res.json({status: 'valmennushakemus sent'})
})

SignupRouter.post('/pong', (req, res) => {
    const mailOptions = {
        from: {address: 'orja@vkry.com'},
        to: 'vk@vkry.info',
        subject: 'Uusi pingis ilmo',
        text: JSON.stringify(req.body)
    };

    mailer.transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('pingishaku sent');
        }
    });

    res.json({status: 'pinigshaku sent'})
})




module.exports = SignupRouter