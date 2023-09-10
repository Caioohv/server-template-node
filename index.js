const express = require('express')
const configExpress = require('./config/express.cfg')

const app = express()

app.listen(8888, () => {
  console.log('listening on port 8888')
})