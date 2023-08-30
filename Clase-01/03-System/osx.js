const os = require('os');
const osUtils = require('os-utils');

// Información básica del sistema
console.log('Nombre del host:', os.hostname());
console.log('Tipo del sistema:', os.type());
console.log('Plataforma:', os.platform());
console.log('Arquitectura:', os.arch());

// Información de la CPU
console.log('Modelo de la CPU:', os.cpus()[0].model);
console.log('Número de núcleos de CPU:', os.cpus().length);

// Información de la memoria
console.log('Memoria total (bytes):', os.totalmem()/(1024*1024));
console.log('Memoria libre (bytes):', os.freemem()/(1024*1024));

// Uso de la CPU
osUtils.cpuUsage(cpuUsage => {
  console.log('Uso de la CPU (%):', cpuUsage);
});

// Uso de la memoria
osUtils.cpuFree(freeMem => {
  console.log('Memoria libre (%):', freeMem);
});
