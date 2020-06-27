const chalk = require('chalk');
const fs = require('fs');

const error = chalk.red.bold;
const success = chalk.green.bold;

const loadNotes = () => {
    try{
        const dataBuffer = fs.readFileSync('notes.json');
        return(JSON.parse(dataBuffer.toString()));
    } catch(e) {//if no such file exists then return empty 
        return [];
    }
}

const saveNotes = (notes) => {
    fs.writeFileSync('notes.json', JSON.stringify(notes));
}

const addNote = (title, body) => {
    const existing_notes = loadNotes();
    const duplicate_note = existing_notes.find( (note) => title === note.title ); //list of duplicate notes

    if(!duplicate_note){
        if(body.length == 0){
            console.log(error("The body cannot be empty."));
        } else{
            existing_notes.push({
                title: title,
                body: body 
            });
            //saving the updated notes
            saveNotes(existing_notes);
            console.log(success("Note created!"));
        }
    } else{
        console.log(error("Title already exists!"));
    }
}

const removeNote = (title) => {
    const existing_notes = loadNotes();
    const filtered_notes = existing_notes.filter( (note) => title !== note.title );
    if(filtered_notes.length < existing_notes.length){
        saveNotes(filtered_notes);
        console.log(success("Note removed!"));
    } else{
        console.log(error("No such title! Please check."));
    }
}

const listNotes = () => {
    const existing_notes = loadNotes();
    if(existing_notes.length === 0){
        console.log(error("There are no notes. Please make one."));
    } else{
        console.log('Your notes are-');
        existing_notes.forEach( (note) => console.log(chalk.blue(note.title)));
    }
}

const readNote = (title) => {
    // const existing_notes = loadNotes();
    const note_req = loadNotes().find( (note) => note.title === title);
    if(note_req){
        console.log("Title:", chalk.magenta.bold(note_req.title));
        console.log("Body: ")
        note_req.body.split(", ").forEach( (point) => console.log(chalk.blue(point.trim())) );
    } else{
        console.log(error("Note not found."));
    }
}

module.exports = {
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
}