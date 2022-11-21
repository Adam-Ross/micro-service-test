const express = require('express')

const app = express()

const PORT = 4003

app.get('/posts', (req, res) => {

})

app.post('/events', (req, res) => {
    
})

app.use(PORT, function() {
    console.log(`Listening on PORT: ${PORT}`)
})