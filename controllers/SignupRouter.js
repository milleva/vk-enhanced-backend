/*
Router for handling
 member applications (root) AND
 temporary tournament signups e.g. löscaba (".../loscaba")
*/
const SignupRouter = require('express').Router()
const nodemailer = require('nodemailer')
const mg = require('nodemailer-mailgun-transport');
const StrBuilder = require('../logic/StrBuilder')

const auth = {
    auth: {
        api_key: 'key-92172ded90c90e6a84f7d71624951cc2',
        domain: 'sandbox647cfb0da0144fda92356c27cd535b78.mailgun.org'
    }
}

const transporter = nodemailer.createTransport(mg(auth))

SignupRouter.post('/', (req, res) => {
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


module.exports = SignupRouter