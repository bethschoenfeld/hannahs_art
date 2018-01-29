require('dotenv').config()

const User = require('./models/User.js')
const Contact = require('./models/Contact.js')
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
        const hannah = new User({
            username: 'Hannah',
        })
        const hannahContactInfo = new Contact({
            email: 'hannahwhite@gmail.com',
            instagram: '@hannahwhite_visualartist',
            website: 'hannahwhitevisualartist.com'

        })
        const hannahPainting = new Artwork({
            artwork: 'https://i.imgur.com/i6ws4Yx.png'
        })
        const hannahCloudPainting = new Artwork({
            artwork: 'https://i.imgur.com/3sCxKd4.png'
        })
        hannahContactInfo.artwork.push(hannahPainting, hannahCloudPainting)
        hannah.contact.push(hannahContactInfo)
        return hannah.save()

            .then(() => {
                const juniper = new User({
                    username: 'Juniper',
                })
                const juniperContactInfo = new Contact({
                    instagram: '@juniperfoxx',
                    website: 'https://www.juniperfoxx.com/'
                })
                const juniperPicture = new Artwork({
                    artwork: 'https://i.imgur.com/aFdnMpW.jpg'
                })

                juniperContactInfo.artwork.push(juniperPicture)
                juniper.contact.push(juniperContactInfo)

                return juniper.save()

                    .then(() => {
                        const daniel = new User({
                            username: 'Daniel'
                        })
                        const danielContactInfo = new Contact({
                            website: 'https://www.danberberich.com/',
                            instagram: '@danberberich/'
                        })
                        const danielArtwork = new Artwork({
                            artwork: 'https://i.imgur.com/UkXJPCX.jpg'
                        })
                        danielContactInfo.artwork.push(danielArtwork)
                        daniel.contact.push(danielContactInfo)

                        return daniel.save()
                    })
            })
    }).catch((error) => {
        console.log('Error saving seeded data!')
        console.log(error)
    })
    .then(() => {
        mongoose.connection.close()
        console.log('Successful Save!!!')
    })