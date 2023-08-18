const os = require('node:os')

console.log('informacion del sistema operativo')
console.log('---------------------------------')
console.log('Nombre del sistema operativo', os.platform())
console.log('version del sistema', os.release())