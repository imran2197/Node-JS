const fs = require("fs");

// fs.readFile("file.txt", "utf-8", (err, data) => {
//   if (err) {
//     console.log(err);
//     return;
//   }
//   console.log(data);
// });

// const content = "Hello World!";
// fs.writeFile("example.txt", content, (err) => {
//   if (err) {
//     console.log(err);
//     return;
//   }
//   console.log("File written successfully");
// });

// fs.rename("example.txt", "sample.txt", (err) => {
//   if (err) {
//     console.log(err);
//     return;
//   }
//   console.log("File has been renamed");
// });

// fs.stat("file.txt", (err, stats) => {
//   if (err) {
//     console.log(err);
//     return;
//   }
//   console.log("FILE SIZE: ", stats.size);
//   console.log("IS DIRECTORY? ", stats.isDirectory());
// });

const directoryName = "my-directory";

// fs.mkdir(directoryName, (err) => {
//   if (err) {
//     console.log(`Error creating directory: ${err}`);
//     return;
//   }
//   console.log(`Directory "${directoryName}" created successfully.`);
// });

// fs.rmdir(directoryName, (err) => {
//   if (err) {
//     console.error(`Error deleting directory: ${err}`);
//     return;
//   }
//   console.log(`Directory "${directoryName}" deleted successfully.`);
// });

// const directoryPath = "./dir";

// if (fs.existsSync(directoryPath)) {
//   `Directory "${directoryName}" deleted successfully.`;
// } else {
//   console.log(`The directory "${directoryPath}" does not exist.`);
// }

// const filePath = "file.txt";
// if (fs.existsSync(filePath)) {
//   console.log(`The file "${filePath}" exists.`);
// } else {
//   console.log(`The file "${filePath}" does not exist.`);
// }

// const filePath = "file.txt";
// fs.access(filePath, fs.constants.F_OK, (err) => {
//   if (err) {
//     console.log(`The path "${filePath}" does not exist.`);
//   } else {
//     console.log(`The path "${filePath}" exists.`);
//   }
// });
