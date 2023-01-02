// CRUD (Create, Read, Update, Delete) operations allow you to work with the data stored in MongoDB.
// AWEIN

const fs = require('fs');

// Creating a directory
fs.mkdirSync('new folder');

// creating a file and writting in it
fs.writeFileSync('new folder/file.txt','CRUD is an operation in MongoDb');

// Append data
fs.appendFileSync('new folder/file.txt','It is just practice code')

//Reading file without getting buffer data
const data = fs.readFileSync('new folder/file.txt','utf8');
console.log(data);

//renaming file
fs.renameSync('new folder/file.txt','new folder/renamedfile.txt');

// to delete a file
fs.unlinkSync(new folder/renamedfile.txt);

// TO delete a directory
fs.rmdirSync('new folder');
