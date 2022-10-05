//fs is also a inbuilt module fs=filesync
//1- syncronus approach

const { readFileSync,writeFileSync } = require("fs")//we can also write cosnt fs=req like in prev 

//const a=require('fs');
const b=readFileSync('./FOLDER/first.txt','utf8')
const c=readFileSync('./FOLDER/second.txt','utf8')
console.log(b,c);
writeFileSync('./FOLDER/third.txt',`this is new file ${b} ${c}`);
//writefilesyn can make a file if that file is not present and write these valuses
//if file already present then it just ubdated that file by writing the valu tha there\
writeFileSync('./FOLDER/first.txt','hey it can also ubdate this',{flag:'a'});
//flag here just repeat the file agian.

