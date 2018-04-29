/*
Router for handling direct messages
*/
const MessageRouter = require('express').Router()
const nodemailer = require('nodemailer')
const mg = require('nodemailer-mailgun-transport');
const StrBuilder = require('../logic/StrBuilder')
require('dotenv').config()

const auth = {
    auth: {
        api_key: process.env.MAILGUN_API_KEY,
        domain: 'sandbox647cfb0da0144fda92356c27cd535b78.mailgun.org'
    }
}

const transporter = nodemailer.createTransport(mg(auth))



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


    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent');
        }
    });

    res.json({status: 'mail sent'})
})

module.exports = MessageRouter