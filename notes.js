const fs = require('fs');

var addNote = (title, body) => {
  var notes = [];
  var note = {
    title,
    body
  };

  // so long as file exists...
  try {
    // string version, still need to parse
    var notesString = fs.readFileSync('notes-data.json')
    // replace notes 
    notes = JSON.parse(notesString);
  } catch (e) {
    // if file does not exist

  }

  // array of dupes
  var duplicateNotes = notes.filter((note) => note.title === title);

  if (duplicateNotes.length === 0){
    notes.push(note);
    // createa file, w/ json'ified notes array
    fs.writeFileSync('notes-data.json', JSON.stringify(notes));
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