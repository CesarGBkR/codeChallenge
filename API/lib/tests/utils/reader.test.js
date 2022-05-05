const reader = require('../../utils/reader')

describe('Test lab to Utils', () => {
    test('Test Reader', () => {
        const students =  reader.readerJsonFile('students.json')
        expect(students).not.toBeUndefined()
    })
})