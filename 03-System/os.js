const os = require('node:os')

console.log('informacion del sistema operativo')
console.log('---------------------------------')
console.log('Nombre del sistema operativo', os.platform())
console.log('version del sistema', os.release())
console.log('Sistema', os.type())
console.log('Arquitectura', os.arch())
console.log('uptime', os.uptime() / 60 / 60)