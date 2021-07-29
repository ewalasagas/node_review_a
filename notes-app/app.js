// const fs = require('fs');

// fs.appendFileSync('notes.txt', '\nThis message was appended again ona new line');

// //Challenge - append message to notes.txt

// //https://links.mead.io/nodecourse

// const add = require('./utils');

// const sum = add(1, 2)
// console.log(sum);

//CHALLENGE 2
// const fs = require('fs');
// const getnotes = require('./utils');

// const validator = require('validator');

// // fs.appendFileSync('notes.txt', '\n' + getnotes());

// console.log(validator.isURL('elainegmailcom'));

//CHALLENGE 3
const chalk = require('chalk');
const yargs = require('yargs');
const notes = require('./notes');
const fs = require('fs');
// console.log(chalk.bgGreen(chalk.black('SUCCESS!!')));

// console.log(process.argv);
yargs.version('1.1.0');

//create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.addNote(argv.title, argv.body);
        // console.log('Title: '+ argv.title);
        // console.log('Body: ' + argv.body);
    }
})

//create remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
    },
    handler(argv) {
        notes.removeNote(argv.title)
        // console.log('Remove a note');
    }
})

//create a list command
yargs.command({
    command: 'list',
    describe: 'List all notes',
    handler() {
        notes.listNotes();
    }
})

//create a read command 
yargs.command({
    command: 'read',
    describe: 'Read all notes',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
    },
    handler(argv) {
        notes.readNote(argv.title)
    }
})


yargs.parse();
// console.log(yargs.argv)
// const command = process.argv[2]
// if(command === 'add') {
//     console.log('Adding note!');
// } else if (command === 'remove') {
//     console.log('Removing note!')
// }
