const fs = require('fs')
const os = require('os')
const assert = require('chai').assert
const notes = require('../lib/notes')

describe('Test notes module', function () {
  it('should create a new note', function () {
    var note = notes.addNote('New Note Title', 'Note Body')
    var notePath = `${os.homedir()}/.scriblr/data/${note.noteId}.json`
    assert.isObject(note)
    assert.isTrue(fs.existsSync(notePath))
  })

  it('should get a note', function () {
    var note = notes.getNote('hello')
    assert.isObject(note)
  })
})
