let f1 = function(param){
    console.log("f1");
}
function f2(param){
    console.log("f2");
}

// arrow function
let f3 = ()=>{
    console.log("f3");
}

// arrow fn with parameter
let f4 = (param)=>{
    console.log(param);
}

// if fn has only one parameter the small brackets can be removed
let f5 = param => {
  console.log(param);
};

// if fn has only one line of syntax then curly brackets can be removed
let f6 = param => console.log(param)
