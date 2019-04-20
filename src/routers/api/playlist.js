const express = require('express')
const router = new express.Router()

router.post('/', async (req, res) => {
    console.log('PLAYLIST POST')

    try {
        res.status(200).send({
            success: true
        })
    } catch(e) {
        res.status(400).send(e)
    }
})

router.get('/', async (req, res) => {
    console.log('PLAYLIST GET')

    try {
        res.status(200).send({
            success: true
        })
    } catch(e) {
        res.status(400).send(e)
    }
})

router.get('/:id', async (req, res) => {
    console.log(`PLAYLIST GET ${req.params.id}`)

    try {
        res.status(200).send({
            success: true,
            id: req.params.id
        })
    } catch(e) {
        res.status(400).send(e)
    }
})

router.patch('/:id', async (req, res) => {
    console.log(`PLAYLIST PATCH ${req.params.id}`)

    try {
        res.status(200).send({
            success: true,
            id: req.params.id
        })
    } catch(e) {
        res.status(400).send(e)
    }
})

router.delete('/:id', async (req, res) => {
    console.log(`PLAYLIST DELETE ${req.params.id}`)

    try {
        res.status(200).send({
            success: true,
            id: req.params.id
        })
    } catch(e) {
        res.status(400).send(e)
    }
})

module.exports = router