const add = (a,b)=>{
    return a+b;
};

const sub = (a,b)=>{
    return a-b;
}

const name="Pankaj";

// console.log(add(5,5));
// module.exports=name;

// module.exports.add = add;
// module.exports.sub = sub;

module.exports={add,sub,name};