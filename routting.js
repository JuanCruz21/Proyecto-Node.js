const http = require('node:http')
const dittoJson = require('./pokemon/ditto.json')

const PR = (req, res) => {
  const { method, url } = req
  switch (method) {
    case 'GET':
      switch (url) {
        case '/pokemon/ditto':
          res.setHeader('Content-Type', 'application/json; charset=utf-8')
          // return res.end('<h1>Juan Cruz dev</h1>')
          return res.end(JSON.stringify(dittoJson))
        default:
          res.statusCode = 404
          res.setHeader('Content-Type', 'text/html; charset=utf-8')
          return res.end('<h1>404 error</h1>')
      }
    case 'POST':
      switch (url) {
        case '/pokemon': {
          let body = ''
          req.on('data', chunk => {
            body += chunk.toString()
          })
          req.on('end', () => {
            try {
              const data = JSON.parse(body)
              res.writeHead(201, { 'content-Type': 'application/json; charset=utf-8' })
              // data.timestamp = Date.now()
              res.end(JSON.stringify(data))
            } catch (error) {
              res.writeHead(400, { 'content-Type': 'application/json; charset=utf-8' })
              res.end(JSON.stringify({ message: 'Invalid JSON' }))
            }
          })
          break
        }
        default:
          res.statusCode = 404
          res.setHeader('Content-Type', 'text/html; charset=utf-8')
          return res.end('<h1>404 error</h1>')
      }
  }
}

const server = http.createServer(PR)
server.listen(1234, () => {
  console.log('server listening on port http://localhost:1234')
})
