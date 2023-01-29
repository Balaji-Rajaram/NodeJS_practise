// Create a program that takes user input from the command line and saves it to a text file:

const readline = require('readline');
const fs = require('fs');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('What would you like to save to a file? ', (answer) => {
    fs.writeFile('example.txt', answer, (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
    });
    rl.close();
});
