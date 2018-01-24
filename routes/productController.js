const express = require('express')
const Product= require('../db/models/Product')
const router = express.Router()

router.get('/', async (req, res) => {
    try {
        const product = await Product.find({})
        res.json(product)
    } catch (err) {
        console.log(err)
        res.sendStatus(500)
    }
})

router.post('/', async (req, res) => {
    try {
        const newProduct = await Product.create({})
        res.json(newProduct)
    } catch (err) {
        console.log(err)
        res.sendStatus(500)
    }
})

router.delete('/:productId', async (req, res) => {
    try {
        await Product.findByIdeAndRemove(req.params.productId)
        res.sendStatus(200)
    } catch (err) {
        console.log(err)
        res.sendStatus(500)
    }
})

router.patch('/:productId', async (req, res) => {
    try {
        const updatedProduct = await Product.findByIdeAndUpdate(req.params.productId, req.body, { new: true })
        res.json(updateProduct)
    } catch (err) {
        console.log(err)
        res.sendStatus(500)
    }
})

module.exports = router