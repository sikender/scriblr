const fs = require('fs')
const os = require('os')
const assert = require('chai').assert
const notes = require('../lib/notes')

describe('Test notes module', function () {
  it('should create a new note', function () {
    var note = notes.addNote('New Note Title', 'Note Body')
    var notePath = `${os.homedir()}/.scriblr/data/${note.id}.json`
    assert.isObject(note)
    assert.isTrue(fs.existsSync(notePath))
  })

  it('should get a note', function () {
    notes.addNote('Gets a note', 'Note Body')
    var note = notes.getNote('Gets a note')
    assert.isObject(note)
  })

  it('should get an array of all notes', function () {
    var notesArray = notes.getAll()
    assert.isArray(notesArray)
  })

  it('should delete a note', function () {
    var note = notes.addNote('hello', 'Note Body')
    var notePath = `${os.homedir()}/.scriblr/data/${note.id}.json`
    notes.removeNote(note.title)
    assert.isFalse(fs.existsSync(notePath))
  })
})
