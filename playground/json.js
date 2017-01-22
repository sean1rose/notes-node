/*
var obj = {
  name: 'Sean'
};

// stringify it is now a string, no longer an obj
var stringObj = JSON.stringify(obj);
console.log('type of - ', typeof stringObj);
console.log('act - ', stringObj);

// string -> obj
var personString = '{"name": "Sean", "age": 33}';
// convert/parse it to a json obj
var parsedStr = JSON.parse(personString);
console.log('type - ', typeof parsedStr);
console.log('act - ', parsedStr);
*/

const fs = require('fs');

var originalNote = {
  title: 'some title',
  body: 'some body'
};
// USE THIS CODE TO SAVE A NOTE
var originalNoteString = JSON.stringify(originalNote);
fs.writeFileSync('notes.json', originalNoteString);

// READ A NOTE:
var noteString = fs.readFileSync('notes.json');
// take string and convert bak to an object
var note = JSON.parse(noteString);
console.log(typeof note);
console.log(note.title);