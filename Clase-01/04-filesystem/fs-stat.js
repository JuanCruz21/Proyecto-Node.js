const fs = require('node:fs')

const stats = fs.statSync('./Archivo.txt')

console.log(
  'Es un fichero: ' + stats.isFile(), // si es un fichero
  'Es un directorio: ' + stats.isDirectory(), // si es un directorio
  'Es un enlace simbolico: ' + stats.isSymbolicLink(), // si es un enlace simbolico
  'Peso: ' + stats.size + ' kb'
)
