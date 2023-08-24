const fs = require('node:fs/promises')
const path = require('node:path')

const folder = process.argv[2] ?? '.'

async function ls (folder) {
    let files
    try{
        files = await fs.readdir(folder)
    } catch{
        console.error(`No se puede leer el directorio ${folder} `)
        process.exit(1)
    }

    const filespromise = files.map(async file => {
        const filePath = path.join(folder, file)
        let Stats
        try{
            Stats = await fs.stat(filePath) //status - información del archivo
        }catch{
            console.error(`No se puede leer el directorio ${folder} `)
            process.exit(1)
        }
        const isDirectory = Stats.isDirectory()
        const fileType = isDirectory ? 'd' : 'f'
        const fileSize = Stats.size
        const fileModified = Stats.mtime.toLocaleString()

        return `${fileType} ${file.padEnd(20)} ${fileSize.toString().padStart(10)} ${fileModified}`
    })
    const filesInfo = await Promise.all(filespromise)

    filesInfo.forEach(fileInfo => console.log(fileInfo))
}

ls(folder)
