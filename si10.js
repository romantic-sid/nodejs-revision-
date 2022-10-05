//npm node project managemant
//local dependancy - we can use the npm for a particular project.
// npm i<packagename> // package can be like bootstrap

//global dependancy- use it any project
// npm i -g<packagename> //i=install
// sudo npm i -g<packagename> (mac)
//  npm init -y to crete a jason file
const _=require('lodash');
const item =[1,[2,[3,[4]]]];
const newitem =_.flattenDeep(item);//it just make the array 
console.log(newitem);
console.log('he;sso sj')