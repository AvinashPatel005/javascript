//class
class car{
    //constuctor
    constructor(name,weight,year){
        this.name=name
        this.weight = weight;
        this.year = year;
    }
    //methods in class
    calculateAge(currYear){
        return currYear-this.year
    }
}

//object of class car
let car1= new car("ford",2323,2011)
console.log(car1.name);
console.log(car1.calculateAge(2023))

let car2 = new car("kia", 3423, 2020);
console.log(car2.name);
console.log(car2.calculateAge(2023));