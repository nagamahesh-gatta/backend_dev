require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {

    res.send('Hello World!..')
})

app.get('/mahesh', (req, res) => {

    res.send('Naga Mahesh Gatta')
})


app.listen(process.env.PORT, () => {
    console.log(`Example app listen on port ${port}`)
})  