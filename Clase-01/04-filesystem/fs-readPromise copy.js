//Solo en los modulos nativos que no tengan promesas nativas

//const fs = require('node:fs')
//const { promisify } = require('node:util')
//const readFilePromise = promisify(fs.readFile)

const fs = require('node:fs/promises')

fs.readFile('./Archivo2.txt', 'Utf-8')
    .then(text=>{
        console.log('Primer texto: ', text)
    })

console.log('--> Haciendo Cosas mientras lee')

fs.readFile('./Archivo.txt', 'Utf-8')
    .then(text=>{
        console.log(text)
    })