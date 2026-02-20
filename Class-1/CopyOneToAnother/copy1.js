const fs = require("fs");

const sourceFilePath = "./source-file.txt";
const destinationFilePath = "./destination-file.txt";

const readStream = fs.createReadStream(sourceFilePath);
const writeStream = fs.createWriteStream(destinationFilePath);

readStream.pipe(writeStream);

readStream.on("error", (err) => {
  console.error(`Error reading the source file: ${err}`);
});

writeStream.on("error", (err) => {
  console.error(`Error writing to the destination file: ${err}`);
});

writeStream.on("finish", () => {
  console.log("File copied successfully.");
});
