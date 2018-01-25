require('dotenv').config()

const User = require('./models/User.js')
const Transaction = require('./models/Transaction.js')
const Artowrk = require('./models/Artowrk.js')

const mongoose = require('mongoose')
mongoose.connect(process.env.MONGODB_URI)

mongoose.connection.once('open', () => {
    console.log(`Mongoose has connected to MongoDB`)
})

mongoose.connection.on('error', (error) => {
    console.error(`MongoDB connction error!!! ${error}`)
    process.exit(-1)
})


User.remove({})
    .then(() => {
        const painting = new Artwork({
            items: 'Painting',
        })
        beth.transaction.push(painting)

        return beth.save()

            .then(() => {
                const josh = new User({
                    username: "Josh"
                })
                const vase = new Artwork({
                    items: "Vase"
                })
                josh.transaction.push(vase)

                return josh.save()
            })
    }).catch((error) => {
        console.log('Error saving seeded data!')
        console.log(error)
    })
    .then(() => {
        mongoose.connection.close()
        console.log('Successful Save!!!')
    })