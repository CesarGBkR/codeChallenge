const fs = require('fs')
class controller {
    static readerJsonFile(path) {
        const rawdata =fs.readFileSync(path)
        return JSON.parse(rawdata)

    }
}

module.exports = controller