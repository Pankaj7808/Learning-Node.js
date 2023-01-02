const fs = require('fs');

// Reading buffer data from file.txt
const buf_data = fs.readFileSync('file.txt');
console.log(buf_data);
// <Buffer 53 74 75 64 69 6e 67 20 69 6e 20 52 69 7a 76 69 20 43 6f 6c 6c 65 67 65 0a 4c 69 76 65 73 20 69 6e 20 44 68 61 72 61 76 69 2c 4d 75 6d 62 61 69>


/* Node.js includes an additional data type called Buffer.
(which is not available in javascript)
Buffer is mainly used to store binary data
while reading froma file or recieving packets frpm networ*/


//Converting Buffer data to Original data
const og_data = buf_data.toString();
console.log(og_data);
// Studing in Rizvi College
// Lives in Dharavi,Mumbai

// Renaming a file
fs.renameSync('file.txt','file1.txt');