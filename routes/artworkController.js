const express = require('express')
const Artwork= require('../db/models/Artwork')
const router = express.Router()

router.get('/', async (req, res) => {
    try {
        const artwork = await Artwork.find({})
        res.json(artwork)
    } catch (err) {
        console.log(err)
        res.sendStatus(500)
    }
})

router.post('/', async (req, res) => {
    try {
        const newArtwork = await Artwork.create({})
        res.json(newArtwork)
    } catch (err) {
        console.log(err)
        res.sendStatus(500)
    }
})

router.delete('/:artworkId', async (req, res) => {
    try {
        await Artwork.findByIdeAndRemove(req.params.artworkId)
        res.sendStatus(200)
    } catch (err) {
        console.log(err)
        res.sendStatus(500)
    }
})

router.patch('/:artworkId', async (req, res) => {
    try {
        const updatedArtwork = await Artwork.findByIdeAndUpdate(req.params.artworkId, req.body, { new: true })
        res.json(updateArtwork)
    } catch (err) {
        console.log(err)
        res.sendStatus(500)
    }
})

module.exports = router