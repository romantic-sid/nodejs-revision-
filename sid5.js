//os module Operation system 
const s=require('os');
console.log(s.userInfo());//print the user info.
console.log(`the system uptime is ${s.uptime()} seconds`);
 const cur={
    name:s.type(),
    release: s.release(),
    totalmem:s.totalmem(),
    freemem:s.freemem()
 }
 console.log(cur);