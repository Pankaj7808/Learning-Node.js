const fs = require('fs');

// Creating a new file
// fs.writeFileSync('file.txt','This is Pankaj Mandal');

//Overwritting the previously created file
fs.writeFileSync('file.txt','Studing in Rizvi College');

// Appending more text in previously created file
fs.appendFileSync('file.txt','\nLives in Dharavi,Mumbai');