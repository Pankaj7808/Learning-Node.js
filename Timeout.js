const func = (ctime)=>{
    console.timeEnd(ctime);
}

console.time("5 seconds");
setTimeout(func,5*1000,"5 seconds");

console.time("1 second");
setTimeout(func,1000,"1 second");

console.time("50 milliseconds");
setTimeout(func,50,"50 milliseconds");
