class filterByCredits {
    static greaterThan (students, credits){
        const studentsGreaterThan = students.filter((student) => student.credits >= credits)
        var name = studentsGreaterThan.map(function (element) {
            return element.name
        })
        return name
    }
    static lessThan (students, credits){
        const studentsLessThan = students.filter((student) => student.credits < credits)
        var name = studentsLessThan.map(function (element) {
            return element.name
        })
        return name
    }
}


module.exports = filterByCredits

