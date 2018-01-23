const mongoose = require('mongoose')
const { TransactionSchema } = require('../schema')

const Transaction = mongoose.model('Transactions', TransactionSchema)

module.exports = Transaction