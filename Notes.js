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
    const duplicate_notes = existing_notes.filter( (note) => title === note.title ); //list of duplicate notes

    if(duplicate_notes.length == 0){
        existing_notes.push({
            title: title,
            body: body
        });
        
        //saving the updated notes
        saveNotes(existing_notes);
        console.log(success("Note created!"));
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

module.exports = {
    addNote: addNote,
    removeNote: removeNote
}