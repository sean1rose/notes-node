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
  return fetchNotes();
}

var getNote = (title) => {
  // scroll thru array of notes and find matching title (filter matching title
  var notes = fetchNotes();
  var filteredNotes = notes.filter((note) => note.title === title);
  return filteredNotes[0];
  // return note if found
  // console.log('reading note - ', filteredNotes);
  // var result = filteredNotes[0] ? filteredNotes[0] : 'note not found';
  // console.log('result - ', result);
  // return result;
};

var removeNote = (title) => {
  // fetch the notes
  var fetchedNotes = fetchNotes();

  // filter out the notes - removing the one w/ title of argv (go thru all, and find one)
  var postFilteredNotes = fetchedNotes.filter((note) => note.title !== title);
  // save new notes array
  saveNotes(postFilteredNotes);

  return fetchedNotes.length !== postFilteredNotes.length;
}

var logNote = (note) => {
  debugger;
  console.log('---');
  console.log(`Title: ${note.title}`);
  console.log(`Body: ${note.body}`);
};

module.exports = {
  addNote,
  getAll,
  getNote,
  removeNote,
  logNote
}