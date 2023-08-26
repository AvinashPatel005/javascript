//Arrays
let arr=[1,2,3,4,5]
let arr1 = [6,7,8];
let arr2=[9,0]
console.log(arr[1]);

let arrRes=arr.concat(arr1,arr2)
console.log(arrRes);
arrRes.shift()
console.log(arrRes);
arrRes.unshift(1);
console.log(arrRes);
delete arrRes[0]
console.log(arrRes);
//Array with different datatypes
let arr3=[1,"avi",true,null]
console.log(typeof arr1[2])