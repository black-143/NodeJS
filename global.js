//Global object
//console.log(global)

setTimeout(()=>{
    console.log("in the timeout")
    clearInterval(int)
},3000)

const int = setInterval(()=>{
    console.log("in set interval")
},1000)

console.log(__dirname)//to get current directory of folder
console.log(__filename)//current directory of filename

console.log(document.querySelector)