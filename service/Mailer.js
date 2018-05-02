
const nodemailer = require('nodemailer')
const mg = require('nodemailer-mailgun-transport')

require('dotenv').config()


const auth = {
    auth: {
        api_key: process.env.MAILGUN_API_KEY,
        domain: 'sandbox647cfb0da0144fda92356c27cd535b78.mailgun.org'
    }
}


const transporter = nodemailer.createTransport(mg(auth))

module.exports = { transporter}