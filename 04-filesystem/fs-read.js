const fs = require('node:fs')
// Utf 8 nos permite leer el text sin que nos devuelva el buffer
const text = fs.readFileSync('./Archivo.txt', 'utf-8') 

console.log(text)
