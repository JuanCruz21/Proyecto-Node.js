const fs = require('node:fs/promises')
const path = require('node:path')
const pc = require('picocolors')

const folder = process.argv[2] ?? '.'

async function ls (folder) {
  let files
  try {
    files = await fs.readdir(folder)
  } catch {
    console.error(pc.red(`❌ No se puede leer el directorio ${folder} `))
    process.exit(1)
  }

  const filespromise = files.map(async (file) => {
    const filePath = path.join(folder, file)
    let Stats
    try {
      Stats = await fs.stat(filePath) // status - información del archivo
    } catch {
      console.error(pc.red(`❌ No se puede leer el directorio ${folder} `))
      process.exit(1)
    }
    const isDirectory = Stats.isDirectory()
    const fileType = isDirectory ? 'd' : 'f'
    const fileSize = Stats.size.toString()
    const fileModified = Stats.mtime.toLocaleString()

    return `${pc.cyan(fileType)} ${pc.green(file.padEnd(20))} ${pc.yellow(
      fileSize.padStart(10)
    )} ${pc.blue(fileModified)}`
  })
  const filesInfo = await Promise.all(filespromise)

  filesInfo.forEach((fileInfo) => console.log(fileInfo))
}

ls(folder)
