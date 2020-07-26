const express = require('express')

const app = express()

const server_port = process.env.OPENSHIFT_NODEJS_PORT || 8080

const server_ip_address = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1'

app.use(express.json())

app.get('/', (req, res) => {
  res.json({status: 'running'})
})

app.listen(server_port, server_ip_address, function() {
  console.log('Server started')
})

module.exports = app
