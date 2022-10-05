//Path Module is also built in module
const path =require('path');
console.log(path.sep );
const filepath =path.join('/FOLDER','/subfolder','sid.txt');
console.log(filepath);
const lastpath=path.basename(filepath);//this get us the last path
console.log(lastpath); 
const absolute=path.resolve(__dirname,'FOLDER','subfolder','sid.txt');
console.log(absolute);//we use this coz for diffrent user the path will be diffrent
