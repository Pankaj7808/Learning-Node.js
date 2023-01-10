// console.time, console.timeLog, console.timeEnd
console.time("Total Time")
const counter1 =  (n)=>{
    console.time("counter1");
    for (let i=0; i<n;i++){

    }
    console.log("counting complete to ",n," by ")
    console.timeEnd("counter1")
}

const counter2 =  (n)=>{
    console.time("counter2");
    for (let i=0; i<n;i++){

    }
    console.log("counting complete to ",n," by ")
    console.timeEnd("counter2")
}
counter2(process.argv[3]);
console.timeLog("Total Time");
counter1(process.argv[2]);

console.timeEnd("Total Time")