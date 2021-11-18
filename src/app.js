const express = require('express')
const cors =require('cors')
const db = require('./database/mongoConfig')
const artistasRoutes = require('./routes/artistasRoutes')

const app = express()

app.use(cors())
app.use(express.json())
app.use("/artistas", artistasRoutes)

db.connect()

module.exports = app