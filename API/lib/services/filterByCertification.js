const reader = require('../utils/reader')
const a = reader.readerJsonFile('students.json')
class filterByCertification {
    static filter (students, certification){
        const studentsCertificades = students.filter((student) => student.haveCertification == certification)
        var emails = studentsCertificades.map(function (element) {
            return element.email
        })
        console.log(emails)
        return emails
    }
}


module.exports = filterByCertification

filterByCertification.filter(a, true)