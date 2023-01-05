const fs = require('fs');
const chalk = require('chalk');

const { argv } = require('process');

// process.argv
console.log(process.argv);
//'C:\\Program Files\\nodejs\\node.exe',
// 'D:\\Node Learn\\npm\\takeInput.js'

const input = process.argv[2];

if(input=='add'){
    fs.writeFileSync(process.argv[3],process.argv[4]);
    console.log(chalk.green.inverse("Task Done successfully"))
}else if(input=='remove'){
    fs.unlinkSync(process.argv[3]);
    console.log(chalk.green.inverse("Task Done successfully"))
}else if(input == 'append'){
    fs.appendFileSync(process.argv[3],argv[4]);
    console.log(chalk.green.inverse("Task Done successfully"))
}else if(input=='rename'){
    fs.renameSync(process.argv[3],process.argv[4]);
    console.log(chalk.green.inverse("Task Done successfully"))
}else{
    console.log(chalk.red("Invalid argument passed!"))
}