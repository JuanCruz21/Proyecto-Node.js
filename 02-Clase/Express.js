const express = require('express')
const app = express()
const dittoJson = require('../pokemon/ditto.json')

app.disable('x-powered-by')

app.use(express.json())

const url = process.env.PORT ?? 1234

app.get('/', (req, res) => {
  res.status(200).send('<h1>Hola</h1>')
})

app.get('/Contacto', (req, res) => {
  res.send('<h1>Contacto</h1>')
})

app.post('/pokemon', (req, res) => {
  res.status(201).json(req.body)
})

app.get('/pokemon/ditto', (req, res) => {
  res.json(dittoJson)
})

app.use((req, res) => {
  res.status(404).send('<h1>Error 404</h1>')
})

app.listen(url, (req, res) => {
  console.log(`server listening on port http://localhost:${url}`)
})
