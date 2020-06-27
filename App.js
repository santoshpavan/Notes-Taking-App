const notes = require('./Notes.js');
const chalk = require('chalk');
const yargs = require('yargs');
const { listNotes } = require('./Notes.js');

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
    handler(note) {
        notes.addNote(note.title, note.body);        
    }
});

yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder: {
        title:{
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(note) {
        notes.removeNote(note.title);
    }
});

yargs.command({
    command: 'list',
    describe: 'Listing all the notes',
    handler() {
        notes.listNotes();
    }
});

yargs.command({
    command: 'read',
    describe: 'Reading the note',
    builder: {
        title: {
             describe: 'Note title',
             demandOption: true,
             type: 'string'
        }
    },
    handler(note){
        notes.readNote(note.title);
    }
});

yargs.parse()
// console.log(yargs.argv);