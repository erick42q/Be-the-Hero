const request = require('supertest')
const app = require('../../src/app')
const conection = require('../../src/database/connection')

describe("ONG", () => {
    beforeEach(async () => {
        await conection.migrate.latest()
    })

    afterAll(async () => {
        await conection.destroy()
        await conection.migrate.rollback()
    })

    it('should be able to create a new ONG', async () => {
        const response = await request(app)
            .post("/ong/create")
            .send({
                name: "kakashi",
                email: "basd@adsf.com",
                whatsapp: "1231231231",
                city: "brasilia",
                uf: "DF"
            })
        // console.log(response.body)
        expect(response.body).toHaveProperty('id')
        expect(response.body.id).toHaveLength(8)
    })
}) 