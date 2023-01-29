// Create a program that reads a text file and outputs its contents to the console:

const fs = require('fs');

fs.readFile('example.txt', 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data);
});
