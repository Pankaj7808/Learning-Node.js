// Asynchronous I/O is a form of input/output processing that permits other processing to continue before the transmission has finished.

const fs = require("fs");

// Create a file Asynchronously
// ---> we must have to call a callback function

// A function passed as an argument is is callback
fs.writeFile('file.txt',"This is Pankaj Mandal", (error)=>{
console.log("file created");
});

// Appending data in a file
fs.appendFile('file.txt',"\nThis is appended line",(err)=>console.log(err,"-> ERROR"));

// Reading data --> In this we can pass two argument in callback function first one is error and second is data return by readFile 
const d = fs.readFile('file.txt','utf8',(err,data)=>console.log(data));
console.log("Last Line")


/*  OUTPUT VARIATION
$ node 1.js
Last Line
null -> ERROR
file created
This is Pankaj Mandal
This is appended line

-----> Here the last line or function which is in last executed and then writeFile executed and then appendFile executed
        and this what asynchronous is. other functions are allow to execute even they are in last

$ node 1.js
Last Line
file created
null -> ERROR
This is Pankaj Mandal
-----> Here the last line or function which is in last executed and then appendFile executed and then writeFile executed Thats why first appendFile
add the text This is appended line but writeFile overwrite that and while reading it show only This is Pankaj Mandal


*/

