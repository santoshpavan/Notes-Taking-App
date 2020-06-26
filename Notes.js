const chalk = require('chalk');
const fs = require('fs');

const error = chalk.red.bold;
const success = chalk.green.bold;

const loadNotes = function(){
    try{
        const dataBuffer = fs.readFileSync('notes.json');
        return(JSON.parse(dataBuffer.toString()));
    } catch(e) {//if no such file exists then return empty 
        return [];
    }
}

const saveNotes = function(notes){
    fs.writeFileSync('notes.json', JSON.stringify(notes));
}

const addNote = function(title, body){
    const existing_notes = loadNotes();
    const duplicate_notes = existing_notes.filter((note) => {
        return title === note.title;
    }); //list of duplicate notes

    if(duplicate_notes.length == 0){
        existing_notes.push({
            title: title,
            body: body
        });
    } else{
        console.log(error("Title already exists!"));
    }

    //saving the updated notes
    saveNotes(existing_notes);
    console.log(success("Note created!"));
}

const removeNote = function(title){
    const existing_notes = loadNotes();
    const filtered_notes = existing_notes.filter((note) => {
        return title !== note.title;
    });

    if(filtered_notes.length < existing_notes){
        saveNotes(filtered_notes);
        console.log(success("Note removed!"));
    } else{
        console.log(error("No notes removed!"));
    }
}

module.exports = {
    addNote: addNote,
    removeNote: removeNote
}