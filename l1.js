var a=2
let b=3
const c=1

// only var can be re-declared
console.log(a)
var a="Blue"
console.log(a);

// let b=4 throws error (cannot be redeclared)

console.log(b)
b="ReD"
console.log(b)

// c=0 throws error (constant value cannot be updated)

let dec
dec="hello"
console.log(dec);