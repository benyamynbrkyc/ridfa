const express = require('express')
const mainRoutes = new express.Router()
const path = require('path')

mainRoutes.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../index.html'))
})

module.exports = mainRoutes
