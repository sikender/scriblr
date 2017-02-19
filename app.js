const program = require('commander')
const prompt = require('cli-input')

const notes = require('./lib/notes')

program
  .command('add <title>')
  .alias('a')
  .description('add a new note')
  .action(function (title) {
    console.log('Type a note (finish with Ctrl^D): ')
    var ps = prompt()
    ps.multiline(function (err, lines, raw) {
      if (err) {
        console.log(err)
      }
      var note = notes.addNote(title, raw)
      console.log(`New post created. Id: ${note.noteId}`)
      process.exit(0)
    })
  })

program
  .command('read <title>')
  .alias('r')
  .description('read a note')
  .action(function (title) {
    var note = notes.getNote(title)
    console.log('--------------------')
    console.log(`Title: ${note.title}`)
    console.log('--------------------')
    console.log(`Body: ${note.body}`)
    console.log('--------------------')
  })

program
  .command('delete <title>')
  .alias('d')
  .description('delete a note')
  .action(function (title) {
    // TODO
  })

program
  .command('list')
  .alias('l')
  .description('list all notes')
  .action(function () {
    var notesArray = notes.getAll()
    notesArray.forEach(function (note) {
      console.log('--------------------')
      console.log(`Title: ${note.title}`)
      console.log('--------------------')
    })
  })

program.parse(process.argv)

if (!program.args.length) program.help()
