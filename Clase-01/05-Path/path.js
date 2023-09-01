const path = require('node:path')
// Barra separadora de carpeta segun SO
console.log(path.sep)

// Unir rutas con path.join
const filePath = path.join('content', 'subfolder', 'test.txt')
console.log(filePath)

const base = path.basename('/tmp/midu-secret-files/password.txt')
console.log(base)

const filename = path.basename('/tmp/juan-secret-files/password.txt', '.txt')
console.log(filename)

const extension = path.extname('my.super.image.txt')
console.log(extension)
