const reader = require('../utils/reader')
const filterByCertification = require('../services/filterByCertification')
const filterByCredits = require('../services/filterByCredits')

class controller {
    static getStudents (path) {
        const students = reader.readerJsonFile(path)
        console.log(students)
        return students
    }

    static getStudentsFilterByCertification(certification) {
        const students = reader.readerJsonFile('students.json')
        const studentsCertificades = filterByCertification.filter(students, certification)
        return studentsCertificades
    }

    static getStudentsFilterByCreditsGreaterThan(credits) {
        const students = reader.readerJsonFile('students.json')
        const studentsCredits = filterByCredits.greaterThan(students, credits)
        return studentsCredits
    }

    static getStudentsFilterByCreditsLessThan(credits) {
        const students = reader.readerJsonFile('students.json')
        const studentsCredits = filterByCredits.lessThan(students, credits)
        return studentsCredits
    }
    
}


module.exports = controller

controller.getStudents('students.json')