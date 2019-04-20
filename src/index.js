const express = require('express')
const path = require('path')
// require('./db/mongoose')
// const playlistRouter = require('./routers/api/playlist')
// const songRouter = require('./routers/api/song')

const app = express()
const port = process.env.PORT | 3000

// const viewsPath = path.join(__dirname, '../views')
// app.set('views', viewsPath)

app.use('/api', express.json())

app.get('/', (req, res) => {
    res.render('index')
})

// app.use('/api/playlist', playlistRouter)
// app.use('/api/song', songRouter)

app.listen(port, () => {
    console.log(`Server is up on port ${port}`)
})