const DB = require('../config')

var addNote = function (title, body) {
  var note = {
    title: title,
    body: body
  }

  var noteId = DB.postSync(note)

  return {noteId, note}
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

module.exports = {
  addNote,
  getNote,
  getAll
}
