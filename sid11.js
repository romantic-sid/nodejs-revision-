

//event loop
// console.log('hello wold')
// setTimeout(() => {
//     console.log('hello')
    
// }, 0);
// console.log('he')
//above exmape is of asyncronus means the call back only work when the next task  is completed 
const {readFile}=require('fs')
console.log('starting first task')
readFile('./FOLDER/first.txt','utf8',(err,result)=>{
    if(err){
        console.log(err)
        return 
    }
    console.log(result)
    console.log('completed second task')
})
console.log('completed thrid task')


//this is example of event loop as readfile is asyncronus so first the third task completed 
//then second start starts.
// asyncronus offloads // very imp