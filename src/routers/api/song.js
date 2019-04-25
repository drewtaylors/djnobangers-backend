const express = require('express')
const Song = require('../../models/song')
const router = new express.Router()

router.post('/', async (req, res) => {const song = new Song({
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
    console.log('SONG - GET REQUEST')
    const match = {}
    
    if (req.query.playlist) {
        match.playlist = req.query.playlist
    }

    try {
        const songs = await Song.find(match)
        res.send(songs)
    } catch(e) {
        res.status(500).send()
    }
})

router.get('/:id', async (req, res) => {
    try {
        const song = await Song.findOne({ _id: req.params.id })

        if (!song) {
            return res.status(400).send()
        }

        res.send(song)
    } catch(e) {
        res.status(500).send()
    }
})

router.patch('/:id', async (req, res) => {
    const updates = Object.keys(req.body)
    const allowedUpdates = ['title', 'url']
    const isValidOperation = updates.every((update) => allowedUpdates.includes(update))

    if (!isValidOperation) {
        return res.status(400).send({ error: 'Invalid updates!' })
    }

    try {
        const song = await Song.findOne({ _id: req.params.id })
        
        if (!song) {
            return res.status(404).send()
        }

        updates.forEach((update) => song[update] = req.body[update])
        await song.save()
        res.send(song)
    } catch(e) {
        res.status(500).send()
    }
})

router.delete('/:id', async (req, res) => {
    try {
        const song = await Song.findOne({ _id: req.params.id })

        if (!song) {
            return res.status(404).send()
        }

        await song.remove()
        res.send(song)
    } catch(e) {
        res.status(500).send()
    }
})

module.exports = router