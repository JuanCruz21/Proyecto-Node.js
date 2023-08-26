const http = require('node:http')
const fs = require('node:fs')

const desiredPort = process.env.PORT ?? 1234

const processRequest = (req, res) => {
  res.setHeader('Content-Type', 'text/html; charset=utf8')

  if (req.url === '/') {
    res.statusCode = 200
    res.end('<h1>Bienvenido a Juan Cruz dev</h1>')
  } else if (req.url === '/image') {
    fs.readFile('./hola.png', (err, data) => {
      if (err) {
        res.statusCode = 500
        res.end('<h1>500 Error interno</h1>')
      } else {
        res.setHeader('Content-Type', 'image/png')
        res.end(data)
      }
    })
  } else if (req.url === '/contacto') {
    res.statusCode = 200
    res.end('<h1>Contacto a Juan Cruz dev</h1>')
  } else {
    res.statusCode = 200
    res.end('<h1>Error 404 por pendejo</h1>')
  }
}
const server = http.createServer(processRequest)

server.listen(desiredPort, () => {
  console.log(`server listening on port http:localhost:${desiredPort}`)
})
