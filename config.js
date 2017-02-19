const os = require('os')
const fs = require('fs')

const dbPath = `${os.homedir()}/.scriblr`
if (!fs.existsSync(dbPath)) {
  fs.mkdirSync(dbPath)
}

const nosqlite = new (require('nosqlite').Connection)(dbPath)

const DB = nosqlite.database('data')

if (!DB.existsSync()) {
  DB.createSync()
}

module.exports = DB
