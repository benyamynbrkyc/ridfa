const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const mainRoutes = require('./routes/mainRoutes')

const app = express()

const PORT = process.env.PORT || 3000

app.use(express.static(path.join(__dirname)))
app.use(bodyParser.urlencoded({ extended: true }))

// routes
app.use('/', mainRoutes)

app.listen(PORT, () => console.log('Server is listening on port: ', PORT))
