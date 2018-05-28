require('dotenv').config()
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const routes = require('./routes')
const cors = require('cors')

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: true
}))

app.use(routes)

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(3000, () => console.log('Example app listening on port 3000!'))
