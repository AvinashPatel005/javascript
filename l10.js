//forEach with index
let arr=[2,3,1,4,6,5,8]

arr.forEach((e,i)=>{
    console.log(i,e)
})

// map creates new array performing some action of existing array elements
let arr1=arr.map((e)=>{
    return e+10
})
console.log(arr1)

//filter create new array having element returning true through a function
let arr2 = arr.filter((e)=>{
    return e<6
})
console.log(arr2);
// reduce- reduces the array to single value
let a = arr.reduce((x,y)=>{
    return x+y
})
console.log(a);