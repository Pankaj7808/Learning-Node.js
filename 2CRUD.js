// Practice of Asynchronous Method in File System

const fs = require('fs');

fs.mkdir("NewFolder",(err)=>{console.log("Folder created successfully")});

fs.writeFile('NewFolder/file.txt',"This is a dummy file",(err)=>{console.log("No error in Wrtting File");})

fs.appendFile('NewFolder/file.txt',"Adding more data in this dummy file using appendFile",(err)=>{console.log("No error in Appending File");});

fs.readFile('NewFolder/file.txt','utf8',(err,data)=>{
        console.log("No error in Reading File...\n\nReading File");
        console.log(data);
});

fs.rename('NewFolder/file.txt','NewFolder/renamed.txt',(err)=>{console.log("File Renamed successfully")});

// fs.unlink('')