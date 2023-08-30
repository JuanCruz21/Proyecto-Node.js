// argumentos de entrada
console.log(process.argv)

// Current working directory
console.log(process.cwd())

// Platform
console.log(process.env.PEPITO)

// controlar procesos y su salida
process.exit(1)

// Podemos controlar eventos del proceso
process.on('exit', () => {
  // limpiar los recursos
})
