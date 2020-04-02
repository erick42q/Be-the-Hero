const geterateUniqueId = require('../../src/utils/geterateUniqueId')


describe('Generate Unique Id', () => {
    it('shoud generate Unique Id', () => {
        const id = geterateUniqueId()
        
        expect(id).toHaveLength(8)
    })
})