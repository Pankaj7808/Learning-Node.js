// Operating System
// The os module provides operating system-related utility methods and properties. 

const os = require("os");
console.log(os.arch());

const freeMemory = os.freemem();
console.log(`${freeMemory/1024/1024/1024}`,"GB")

console.log(`${os.totalmem()/1024/1024/1024}`,"GB");

console.log(os.hostname());

console.log(os.platform())

console.log(os.type())