//Solo en los modulos nativos que no tengan promesas nativas

//const fs = require('node:fs')
//const { promisify } = require('node:util')
//const readFilePromise = promisify(fs.readFile)

import { readFile } from 'node:fs/promises'

Promise.all([
    readFile('./Archivo.txt', 'utf-8'),
    readFile('./Archivo2.txt', 'utf-8')
]).then(([text, secondtext]) => {
    console.log('Primer texto: ', text)
    console.log('segundo texto: ', secondtext)
})