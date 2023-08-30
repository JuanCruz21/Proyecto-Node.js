//Solo en los modulos nativos que no tengan promesas nativas

//const fs = require('node:fs')
//const { promisify } = require('node:util')
//const readFilePromise = promisify(fs.readFile)

import { readFile } from 'node:fs/promises'

; (
    async () => {
        console.log('--> Haciendo Cosas mientras lee')
        const text = await readFile('./Archivo.txt', 'utf-8')
        console.log('Primer texto: ', text)
        console.log('--> Haciendo Cosas mientras lee 2')
        const text2 = await readFile('./Archivo2.txt', 'utf-8')
        console.log('Primer texto: ', text2)
    })
()