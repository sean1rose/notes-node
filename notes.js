const fs = require('fs');

// fetch from file sys
var fetchNotes = () => {
  // so long as file exists...
  try {
    // string version, still need to parse
    var notesString = fs.readFileSync('notes-data.json')
    // replace notes 
   return JSON.parse(notesString);
  } catch (e) {
    // if file does not exist
    return [];
  }
};

// save to array notes
var saveNotes = (notes) => {
  fs.writeFileSync('notes-data.json', JSON.stringify(notes));
};

var addNote = (title, body) => {
  var notes = fetchNotes();
  var note = {
    title,
    body
  };
  // array of dupes
  var duplicateNotes = notes.filter((note) => note.title === title);
  
  // if no dupes -> save
  if (duplicateNotes.length === 0){
    notes.push(note);
    // createa file, w/ json'ified notes array
    saveNotes(notes);
    return note;
  }
};

var getAll = () => {
  console.log('getting all notes');
  // return 
}

var readNote = (title) => {
  console.log('reading note - ', title);
};

var removeNote = (title) => {
  console.log('removing note - ', title);
}

module.exports = {
  addNote,
  getAll,
  readNote,
  removeNote
}