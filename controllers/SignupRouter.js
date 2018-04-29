/*
Router for handling
 member applications (root) AND
 temporary tournament signups e.g. löscaba (".../loscaba")
*/
const SignupRouter = require('express').Router()
const nodemailer = require('nodemailer')
const mg = require('nodemailer-mailgun-transport')
const StrBuilder = require('../logic/StrBuilder')
require('dotenv').config()

const auth = {
    auth: {
        api_key: process.env.MAILGUN_API_KEY,
        domain: 'sandbox647cfb0da0144fda92356c27cd535b78.mailgun.org'
    }
}

const transporter = nodemailer.createTransport(mg(auth))

SignupRouter.post('/', (req, res) => {
    const mailOptions = {
        from: {address: 'orja@vkry.com'},
        to: 'vk@vkry.info',
        subject: 'Uusi jäsenhakemus',
        text: StrBuilder.buildJasenHakemusString(req.body)
    };


    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('Jäsenhakemus sent');
        }
    });

    res.json({status: 'jasenhakemus sent'})
})


module.exports = SignupRouter