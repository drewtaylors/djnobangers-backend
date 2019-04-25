const mongoose = require('mongoose')

const playlistSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    slug: {
        type: String,
        required: true
    },
    tags: {
        type: String,
        required: false
    }
}, {
    timestamps: true
})

const Playlist = mongoose.model('Playlist', playlistSchema)

module.exports = Playlist