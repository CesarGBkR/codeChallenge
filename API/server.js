const controller = require('../API/lib/controllers/controller')

const expres = require('express')

const app = expres()

const port = 3000

app.get('/v1/allStudents', (req, res) => {
    const students =  controller.getStudents('students.json')
    res.status(200).json(students)
})

app.get('/v1/allStudents/certification:certification', (req, res) => {
    const certification =  req.params.certification
    const studentsCertificades =  controller.getStudentsFilterByCertification(certification)
    res.json(studentsCertificades)
})

app.get('/v1/allStudents/CreditsGreaterThan:credits', (req, res) => {
    const credits = req.params.credits
    const creditsGreater = controller.getStudentsFilterByCreditsGreaterThan(credits)
    res.status(200).json(creditsGreater)
})

app.get('/v1/allStudents/CreditsLessThan:credits', (req, res) => {
    const credits = req.params.credits
    const creditsLess = controller.getStudentsFilterByCreditsLessThan(credits)
    res.status(200).json(creditsLess)
})


app.listen(port, () => {
    console.log(`messagge ${port}`)
})