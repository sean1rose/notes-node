// app initialization file
console.log('starting app.js');

// load in built in module - file system module
const fs = require('fs');
const os = require('os');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

// arguments provided by yargs
const argv = yargs.argv
var command = process.argv[2];
console.log('Command - ', command);
console.log('yargs - ', argv);

if (command === 'add') {
  // console.log('Adding new note');
  var note = notes.addNote(argv.title, argv.body);
  if (note) {
    console.log(`note title is ${note.title} while the body is ${note.body}`);
  } else {
    console.log('note title is a dupe, not added');
  }
} else if (command === 'list') {
  notes.getAll();

} else if (command === 'read') {
  notes.readNote(argv.title);

}  else if (command === 'remove') {
  var noteRemoved = notes.removeNote(argv.title);
  var message = noteRemoved ? `Note  was removed` : 'Note not found';
  console.log(message);
}
else {
  console.log('Command not recognized');
}