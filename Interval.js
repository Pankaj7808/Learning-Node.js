var x = 10, y =14;

const disp = ()=>{
    console.log("x=",x,"y= ",y);
}

const updateX = ()=>{
    x+=5;
}

const updateY = ()=>y+=10;

setInterval(updateX,500);
setInterval(updateY,1000);
setInterval(disp,1500);
