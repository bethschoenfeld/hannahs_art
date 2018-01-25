const mongoose = require('mongoose')
const { ArtworkSchema } = require('../schema')

const Artwork = mongoose.model('Artwork', ArtworkSchema)

module.exports = Artwork