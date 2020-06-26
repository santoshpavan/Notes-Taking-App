const chalk = require('chalk');
const yargs = require('yargs');

//customize yargs version
yargs.version('1.0');

//create the commnds
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title:{
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body:{
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(arg) {
        console.log('Title: ' + arg.title);
        console.log('Body: ' + arg.body);
    }
});

yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    handler: function() {
        console.log('Removing a note');
    }
});

yargs.command({
    command: 'list',
    describe: 'Listing all the notes',
    handler: function() {
        console.log('The notes are...');
    }
});

yargs.command({
    command: 'read',
    describe: 'Reading the note',
    handler: function() {
        console.log('Reading the note');
    }
});

yargs.parse()
// console.log(yargs.argv);