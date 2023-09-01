const express = require('express')
const app = express()
const dittoJson = require('../pokemon/ditto.json')

app.disable('x-powered-by')

app.use((req, res, next) => {
  if (req.method !== 'POST') return next()
  if (req.headers['content-type'] !== 'application/json') return next()

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

const url = process.env.PORT ?? 1234

app.get('/', (req, res) => {
  res.status(200).send('<h1>Hola</h1>')
})

app.get('/Contacto', (req, res) => {
  res.send('<h1>Contacto</h1>')
})

app.post('/pokemon', (req, res) => {
  res.json(res.body)
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
