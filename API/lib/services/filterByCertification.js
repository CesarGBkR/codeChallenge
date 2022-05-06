class filterByCertification {
    static filter (students, certification){
        const studentsCertificades = students.filter((student) => student.haveCertification == certification)
        var emails = studentsCertificades.map(function (element) {
            return element.email
        })
        return emails
    }
}


module.exports = filterByCertification
