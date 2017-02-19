const DB = require('../config')

var addNote = function (title, body) {
  var note = {
    title: title,
    body: body
  }

  var noteId = DB.postSync(note)

  return {noteId, note}
}

module.exports = {
  addNote
}
