const program = require('commander')
const prompt = require('cli-input')

const notes = require('./lib/notes')
const DB = require('./config')

program
  .command('add <title>')
  .alias('a')
  .description('add a new note')
  .action(function (title) {
    console.log('Type a note (finish with Ctrl^D): ')
    var ps = prompt()
    ps.multiline(function (err, lines, raw) {
      // TODO
      if (err) {
        console.log(err)
      }
      notes.addNote(title, raw)
      process.exit(0)
    })
  })

program
  .command('read <title>')
  .alias('r')
  .description('read a note')
  .action(function (title) {
    // TODO
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
  .action(function (title) {
    // TODO
  })

program.parse(process.argv)

if (!program.args.length) program.help()
