const fs = require('fs')
class reader {
    static readerJsonFile(path) {
        const rawdata = fs.readFileSync(path)
        return JSON.parse(rawdata)
        

    }
}

module.exports = reader

