const express = require ('express')
const app = express()

app.use('/film', require('./film'))
app.use('/article', require('./article'))
app.use('/commentaire', require('./commentaire'))