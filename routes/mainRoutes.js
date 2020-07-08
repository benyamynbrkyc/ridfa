const express = require('express')
const mainRoutes = new express.Router()
const path = require('path')

mainRoutes.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../index.html'))
})

mainRoutes.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname, '../about.html'))
})

mainRoutes.get('/portfolio', (req, res) => {
  res.sendFile(path.join(__dirname, '../portfolio.html'))
})

mainRoutes.get('/contact', (req, res) => {
  res.sendFile(path.join(__dirname, '../contact.html'))
})

module.exports = mainRoutes
