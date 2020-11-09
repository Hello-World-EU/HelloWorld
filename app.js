const express = require('express')

const app = express()

app.get('/', (req, res) => {
  // res.status(200).json('Hello World 1')
  res.send('Hello World 1')
})

module.exports = app.listen(4000, () => console.log(`Running on http://localhost:4000`))