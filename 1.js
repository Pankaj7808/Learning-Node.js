// The path module provides utilities for working with file and directory paths

const path = require("path");

console.log(path.dirname("D:/Node Learn/Module-Path/1.js"));

console.log(path.extname("D:/Node Learn/Module-Path/1.js"))


console.log(path.basename("D:/Node Learn/Module-Path/1.js"))

console.log(path.parse("D:/Node Learn/Module-Path/1.js"))
// {
//     root: 'D:/',
//     dir: 'D:/Node Learn/Module-Path',
//     base: '1.js',
//     ext: '.js',
//     name: '1'
//   }