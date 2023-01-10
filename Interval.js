var x = 10, y =14;

const disp = ()=>{
    console.log("x=",x,"y= ",y);
}

const updateX = ()=>{
    x+=5;
}

const del = ()=>{
    clearInterval(intervalObj)
}

const updateY = ()=>y+=10;

setInterval(updateX,500);
setInterval(updateY,1000);
const intervalObj = setInterval(disp,1500);
setTimeout(del,15000);   //stop calling only disp function again and again after 5000 ms