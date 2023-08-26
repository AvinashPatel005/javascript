
let obj={
    "avi":23,
    "akoi":21,
    "heli":45,
    "osko":{
        "kos":1.11,
        "ksp":1.12
    }
}
let arr=Object.entries(obj)
arr.forEach(e=>{
    console.log(e)
})