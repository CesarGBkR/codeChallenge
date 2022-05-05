class filterByCredits {
    static greaterThan (students, credits){
        const studentsGreaterThan = students.filter((student) => student.credits >= credits)
        var name = studentsGreaterThan.map(function (element) {
            return element.name
        })
        return name
    }
    static smallerThan (students, credits){
        const studentsSmallerThan = students.filter((student) => student.credits < credits)
        var name = studentsSmallerThan.map(function (element) {
            return element.name
        })
        return name
    }
}


module.exports = filterByCredits

