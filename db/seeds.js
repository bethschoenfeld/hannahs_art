require('dotenv').config()

const mongoose = require('mongoose')
mongoose.connect(process.env.MONGODB_URI)

const User = require('./models/User.js')

const shopper = new User({ name: 'Shopper' })

User
    .remove({})
    .then(() => shopper.save())
    .then(() => console.log('Successful Save!!!'))
    .then(() => mongoose.connection.close())