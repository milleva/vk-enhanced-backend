/*
Router for handling
 member applications (root) AND
 temporary tournament signups e.g. löscaba (".../loscaba")
*/
const SignupRouter = require('express').Router()
const nodemailer = require('nodemailer')


module.exports = SignupRouter