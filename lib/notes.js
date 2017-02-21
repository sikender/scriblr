const DB = require('../config')

var addNote = function (title, body) {
  var note = {
    title: title,
    body: body
  }

  DB.postSync(note)

  return note
}

var getNote = function (title) {
  var noteArray = DB.findSync({title: title})
  var note = {
    title: noteArray[0].title,
    body: noteArray[0].body
  }

  return note
}

var getAll = function () {
  var notes = DB.allSync()
  return notes
}

var removeNote = function (title) {
  var noteArray = DB.findSync({title: title})
  try {
    DB.deleteSync(noteArray[0].id)
    console.log('Note deleted')
  } catch (error) {
    console.log('Cannot find note')
  }
}

module.exports = {
  addNote,
  getNote,
  getAll,
  removeNote
}
