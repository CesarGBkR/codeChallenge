const filterByCredits = require('../../services/filterByCredits')

describe('Test lab to Filter By Credits service', () => {
    test('Test 1: filter by greater than and smaller than', () => {

        const students = [{name:'student1', credits:500}, {name: 'student2', credits: 499}]
        const filterGreaterThan = filterByCredits.greaterThan(students, 500)
        const filterSmallerThan = filterByCredits.lessThan(students, 500)
        expect(filterGreaterThan).toContain('student1')
        expect(filterSmallerThan).toContain('student2')
    })
})