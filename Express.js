const express = require('express')
const app = express()
const dittoJson = require('./pokemon/ditto.json')
app.disable('x-powered-by')

const url = process.env.PORT ?? 1234

app.get('/', (req, res) => {
  res.status(200).send('<h1>Hola</h1>')
})

app.get('/Contacto', (req, res) => {
  res.send('<h1>Contacto</h1>')
})
app.post('/pokemon', (req, res) => {
  let body = ''
  req.on('data', chunk => {
    body += chunk.toString()
  })

  req.on('end', () => {
    const data = JSON.parse(body)
    data.time = Date.now()
    res.json(data)
  })
})

app.get('/pokemon/ditto', (req, res) => {
  res.json(dittoJson)
})
app.listen(url, () => {
  console.log(`server listening on port http://localhost:${url}`)
})

app.use((req, res) => {
  res.status(404).send('<h1>Error 404</h1>')
})
