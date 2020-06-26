const chalk = require('chalk');
const validator = require('validator');

const error = chalk.bold.red;
const success = chalk.bold.green;

const command = process.argv[2];

switch(command){
    case 'add':
        console.log(success('Note added!'));
        break;

    case 'remove':
        console.log(success('Note removed!'));
        break;
    
    default:
        console.log(error("Please enter correct command"));
}