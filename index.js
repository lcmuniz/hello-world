const express = require('express')

const app = express()

app.use(express.json())

app.get('/', (req, res) => {
  res.json({status: 'running'})
})

app.listen(8080)
console.log('Server listening on port 8080')
