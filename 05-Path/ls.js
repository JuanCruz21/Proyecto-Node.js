const fs = require('node:fs/promises')
// const folder = process.argv['cd ..'] ?? '.'
fs.readdir('.')
    .then(files =>{files.forEach(file => {
            console.log(file)
        }
        )
    }
    ).catch(err => {
        if (err) {
            console.error('error en el directorio: ', err)
            return;
        }
    })