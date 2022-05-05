const reader = require('../utils/reader')
const a = reader.readerJsonFile('students.json')

class filterByCredits {
    static greaterThan (students, credits){
        const studentsGreaterThan = students.filter((student) => student.credits >= credits)
        var name = studentsGreaterThan.map(function (element) {
            return element.name
        })
        console.log(name)
        return name
    }
    static lessThan (students, credits){
        const studentsLessThan = students.filter((student) => student.credits < credits)
        var name = studentsLessThan.map(function (element) {
            return element.name
        })
        console.log(name)
        return name
    }
}


module.exports = filterByCredits

filterByCredits.lessThan(a, 500)