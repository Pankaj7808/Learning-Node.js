/* const app = require("./App");

console.log(app)
//-->>> require("./App") return objects of two function as two function are exportting if more than one thing is exported


console.log(app.add(5,5)); */

//-->Directly access the functions from object
const {name,add,sub} = require("./App");

console.log(add(5,5))
console.log(sub(5,5));
console.log(name);
