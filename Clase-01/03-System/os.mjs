import { platform, release, type, arch, uptime, hostname } from 'node:os'

console.log('informacion del sistema operativo')
console.log('---------------------------------')
console.log('Nombre del sistema operativo', platform())
console.log('version del sistema', release())
console.log('Sistema', type())
console.log('Arquitectura', arch())
console.log('uptime', uptime() / 60 / 60)
console.log('Nombre del equipo: ' , hostname())

