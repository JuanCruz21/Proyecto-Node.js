const http = require('node:http')
const { findAvalitePort } = require('./free-port')

const server = http.createServer((req, res) => {
  console.log('request received')
  res.end('Juan Cruz Dev')
})

findAvalitePort(3000).then(port => {
  server.listen(port, () => {
    console.log(`server listening on port http:localhost:${port}`)
  })
})
