// app initialization file
// load in built in module - file system module
const fs = require('fs');
const os = require('os');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

var titleOptions = (describe, demand, alias) => {
  return {
    describe,
    demand,
    alias
  };
};

var bodyOptions = (describe, demand, alias) => {
  return {
    describe,
    demand,
    alias
  }
}

// arguments provided by yargs
const argv = yargs.command('add', 'Add a new note', {
  title: titleOptions('Title of note', true, 't'),
  body: bodyOptions('Body of the note', true, 'b')
})
.command('list', 'List all notes')
.command('read', 'Read a note', {
  title: titleOptions('Title of note', true, 't')
})
.command('remove', 'Remove a note', {
  title: titleOptions('Title of note', true, 't')
})
.help().argv
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