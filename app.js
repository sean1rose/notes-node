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
  notes.addNote(argv.title, argv.body);
} else if (command === 'list') {
  notes.getAll();

} else if (command === 'read') {
  notes.readNote(argv.title);

}  else if (command === 'remove') {
  notes.removeNote(argv.title);
}
else {
  console.log('Command not recognized');
}