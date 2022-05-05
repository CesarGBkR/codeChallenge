const filterByCertification = require('../services/filterByCertification')

describe('Test suit to Services', () => {
    test('Test 1: Filter By Certification', () => {

        const students = [{student1: 'student1', haveCertification: true, email: 'student1@launchx.com'}, {student2: 'student2', haveCertification: false, email: 'student2@launchx.com'}]
        const filterTrue = filterByCertification.filter(students, true)
        const filterFalse = filterByCertification.filter(students, false)
        
        expect(filterTrue).toContain('student1@launchx.com')
        expect(filterFalse).toContain('student2@launchx.com')
    })
})