const connect = require("../database/connection")

module.exports = {

    async list(request, response) {
        const { ong_id } = request.body

        const incidents = await connect('incidents')
            .where('ong_id', ong_id)
            .select("*")

        return response.json({ incidents })
    },

    async ping(request, response) {
        const body = request.body
        response.json({ body, "ping": "pong" })
    }

}