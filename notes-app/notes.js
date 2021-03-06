const fs = require('fs');
const chalk = require('chalk');

const getNotes = function() {
    return "Your notes.."
}


const addNote = (title, body) => {
    const notes = loadNotes();
    // const duplicateNotes = notes.filter((note) => note.title === title);
    const duplicateNote = notes.find((note) => note.title === title);

    debugger
    
    if(!duplicateNote) {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes);
        console.log('new note added');
    } else {
        console.log('note title taken');
    }
}

const readNote = (title) => {
    const notes = loadNotes();
    const duplicateNote = notes.find((note) => note.title === title);

    if(duplicateNote) {
        console.log(chalk.blue.inverse(duplicateNote.title));
        console.log(duplicateNote.body);
    } else {
        console.log(chalk.red('Error: No note found'))
    }
}

const removeNote = (title) => {
    const notes = loadNotes();
    const notesToKeep = notes.filter((note) => note.title !== title)

    if(notes.length > notesToKeep.length) {
        console.log(chalk.green.inverse('Note removed!'))
    } else {
        console.log(chalk.red.inverse('No note found!'));
    }
    
    saveNotes(notesToKeep);
    
}

const listNotes = () => {
    const notes = loadNotes();
    console.log(chalk.blue.inverse("Your Notes"));
    notes.forEach((note) => {
        console.log(note.title);
    })
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = () => {
    try{
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    } catch (e) {
        return []
    }
}

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
}