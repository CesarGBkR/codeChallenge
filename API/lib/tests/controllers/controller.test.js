const reader = require('../../utils/reader')
const controller = require('../../controllers/controller')

describe('Test lab to controller', () => {
    test('Test 1: Reader Controller', () => {
        const students =  reader.readerJsonFile('students.json')
        expect(students).not.toBeUndefined()
    })

    test('Test 2: Filter By Certification Controller', () => {

        const filterByCertificationTrueController = controller.getStudentsFilterByCertification(true)
        const filterByCertificationFalseController = controller.getStudentsFilterByCertification(false)

        expect(filterByCertificationTrueController).toContain('Todd@visualpartnership.xyz')
        expect(filterByCertificationFalseController).toContain('Camacho@visualpartnership.xyz')
    })

    test('Test 3: Filter By Credits Controller', () => {

        const filterByCreditsGreaterController = controller.getStudentsFilterByCreditsGreaterThan(500)
        const filterByCreditsLessController = controller.getStudentsFilterByCreditsLessThan(500)

        expect(filterByCreditsGreaterController).toContain('Warren')
        expect(filterByCreditsLessController).toContain('Fuentes')
    })
    
})