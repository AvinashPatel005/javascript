
let ob1 = {
    name:"Avinash",
    roll:4,
    college:"SOA",
    branch:"CSIT"
}

class person{
    constructor(name,college){
        this.name=name
        this.college=college
    }
}
let ob2 = Object.assign(new person(),{name:ob1.name,college:ob1.college});

console.log(ob2);
export{ob1}