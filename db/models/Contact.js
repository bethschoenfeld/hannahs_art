const mongoose = require('mongoose')
const { ContactSchema } = require('../schema')

const Contact = mongoose.model('Contact', ContactSchema)

module.exports = Contact