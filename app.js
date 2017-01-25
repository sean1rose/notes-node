// app initialization file
// load in built in module - file system module
const fs = require('fs');
const os = require('os');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

// arguments provided by yargs
const argv = yargs.argv
var command = process.argv[2];

if (command === 'add') {
  // console.log('Adding new note');
  var note = notes.addNote(argv.title, argv.body);
  if (note) {
    console.log('note created');
    notes.logNote(note);
  } else {
    console.log('note title is taken already...');
  }
} else if (command === 'list') {
  var allNotes = notes.getAll();
  console.log(`Printing ${allNotes.length} note(s).`);
  allNotes.forEach((note) => notes.logNote(note));
} else if (command === 'read') {
  var note = notes.getNote(argv.title);
  if (note) {
    console.log('note found');
    notes.logNote(note);
  } else {
    console.log('note not found');
  }
}  else if (command === 'remove') {
  var noteRemoved = notes.removeNote(argv.title);
  var message = noteRemoved ? `Note  was removed` : 'Note not found';
  console.log(message);
}
else {
  console.log('Command not recognized');
}