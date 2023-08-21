const fs = require('node:fs')

fs.readFile('./Archivo2.txt', 'Utf-8', (error, text)=>{
    console.log('Primer texto: '+text)
})

console.log('--> Haciendo Cosas mientras lee')

fs.readFile('./Archivo.txt', 'Utf-8', (error, text)=>{
    try
    {
        console.log('Segundo texto: '+text)
    }
    catch
    {
        error
    }
        
})