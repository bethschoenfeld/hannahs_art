require('dotenv').config()

const mongoose = require('mongoose')
mongoose.connect(process.env.MONGODB_URI)

const User = require('./models/User.js')
const Transaction = require('./models/Transaction.js')
const Product = require('./models/Product.js')


User
    .remove({})
    .then(() => user.save())
    .catch((error) => {
        console.log('Error saving seeded data!')
    })
    .then(() => {
        mongoose.connection.close()
    console.log('Successful Save!!!')
})