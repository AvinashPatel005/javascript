let arr=[2,3,9,3,9,4]
//sort modifies the original array uses a function (a ,b) if return -ve then order will be a,b | if returns +ve order will be b,a
arr.sort((a,b)=>{
    return a-b
})
console.log(arr)
console.log(arr.toString())
console.log(arr.join(" + "));


let arr1=[["Avi",2],["Ap",1],["Ad",5]]

arr1.forEach(element => {
    console.log(element)
});

console.log("after sort")
// sorts according to inner elements
arr1.sort((a,b)=>{
    return a[1]-b[1]
})
arr1.forEach((element) => {
  console.log(element);
});