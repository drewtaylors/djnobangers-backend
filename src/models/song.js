const mongoose = require('mongoose')

const songSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true
    },
    playlist: {
        type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Playlist' }],
    }
}, {
    timestamps: true
})

const Song = mongoose.model('Song', songSchema)

module.exports = Song