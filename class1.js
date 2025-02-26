// import fs from 'fs'; // ES6
//fs - File System Module
const fs = require('fs');

//Asynchronous Operation
// fs.readFile('file1.txt', 'utf8', (err, data) => {
//     if(err) {
//         console.error(err);
//         return;
//     }
//     console.log(data);
// });

// const content = 'Hello, World!';
// fs.writeFile('file2.txt', content, (err) => {
//     if(err) 
//         {
//         console.error(err);
//         return;
//         }
//     console.log('File written successfully');
// }); 

//Synchronous Operation ----> This will block the exection of the code until the file is read
// fs.readFileSync('file1.txt', 'utf8', (err, data) => {
//     if(err) {
//         console.error(err);
//         return;
//     }
//     console.log(data);
// });

// fs.stat('file1.txt', (err, stats) => {
//     if(err) {
//         console.error(err);
//         return; // If we get the error, we don't want to execute the code below, so we stop the execution by return statement. 
//     }
//     console.log("File Size", stats.size);
//     console.log("Is File ?", stats.isFile());
//     console.log("Is Directory ?", stats.isDirectory());
// });

//path module - to work with file and directory paths
// const path = require('path');
// const fullPath = path.join("folder", "subFolder", "file1.txt");
// console.log("Full Path: ", fullPath);

// const absolutePath = path.resolve("folder", "subFolder", "file1.txt");
// console.log("Absolute Path : ", absolutePath);

// const parsedPath = path.parse(absolutePath);
// console.log("Parsed path:", parsedPath);


//OS module - to get information about the operating system
// const os = require('os');
// console.log("OS Platform: ", os.platform());
// console.log("OS Architecture: ", os.arch());    
// console.log("OS User Info: ", os.userInfo());
// console.log("OS Total Memory: ", os.totalmem());
// console.log("OS Free Memory: ", os.freemem());
// console.log("OS Uptime: ", os.uptime());

//Streams - to read and write data in chunks


const sourcePath = 'file1.txt';
const destinationPath = 'file3.txt';

//Create a readable stream from the source file

const readStream = fs.createReadStream(sourcePath); 

const writeStream = fs.createWriteStream(destinationPath);

readStream.pipe(writeStream);

readStream.on('error', (err) => {
    console.error("An error occured during the read file : ", err);
});

writeStream.on('error', (err) => {
    console.error("An error occured during the write file : ", err);
});

writeStream.on('finish', () => {
    console.log("File write is done");
});





