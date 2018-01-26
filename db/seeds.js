require('dotenv').config()

const User = require('./models/User.js')
const artwork = require('./models/artwork.js')
const Artwork = require('./models/Artwork.js')

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
        beth.artwork.push(painting)

        return beth.save()

            .then(() => {
                const josh = new User({
                    username: "Josh"
                })
                const vase = new Artwork({
                    items: "Vase"
                })
                josh.artwork.push(vase)

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