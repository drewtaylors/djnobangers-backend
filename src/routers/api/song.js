const express = require('express')
const Song = require('../../models/song')
const router = new express.Router()

router.post('/', async (req, res) => {
    console.log('SONG POST')

    console.log(req.body)

    const song = new Song({
        ...req.body
    })

    try {
        await song.save()
        res.status(200).send(song)
    } catch(e) {
        res.status(400).send(e)
    }
})

router.get('/', async (req, res) => {
    console.log('SONG GET')

    try {
        res.status(200).send({
            success: true
        })
    } catch(e) {
        res.status(400).send(e)
    }
})

router.get('/:id', async (req, res) => {
    console.log(`SONG GET ${req.params.id}`)

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
    console.log(`SONG PATCH ${req.params.id}`)

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
    console.log(`SONG DELETE ${req.params.id}`)

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