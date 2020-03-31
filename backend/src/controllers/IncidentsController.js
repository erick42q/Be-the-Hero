const connect = require("../database/connection")
module.exports = {

    async list(request, response) {

        const { page = 1 } = request.query

        const [count] = await connect('incidents')
            .count()

        const data = await connect('incidents')
            .join('ongs', 'ongs.id', '=', 'incidents.ong_id')
            .limit(5)
            .offset((page - 1) * 5)
            .select([
                "incidents.*",
                'ongs.name',
                'ongs.email',
                'ongs.whatsapp',
                'ongs.city',
                'ongs.uf'
            ])
                
        response.header("x-total-count", count["count(*)"]) 
        return response.json(data)

    },


    async create(request, response) {
        const { title, description, value } = request.body

        ong_id = request.headers.authorization

        const [id] = await connect('incidents').insert({
            title, description, value, ong_id
        })

        console.log(ong_id)
        return response.json({ id })
    },


    async delete(request, response) {
        const { id } = request.params
        ong_id = request.headers.authorization

        const incident = await connect('incidents')
            .where('id', id)
            .select('ong_id')
            .first()

        if (!incident) {
            response.status(400).send()
        }

        if (incident.ong_id !== ong_id) {
            return response.status(401).json("not authorized")
        }

        await connect('incidents').where('id', id).delete()

        // console.log(ong_id)
        return response.status(204).send()
    },

    async select(request, response) {
        const { id } = request.params
        ong_id = request.headers.authorization

        const incident = await connect('incidents')
            .where('id', id)
            .select('ong_id')
            .first()

        if (!incident) {
            response.status(400).send()
        }

        if (incident.ong_id !== ong_id) {
            return response.status(401).json("not authorized")
        }

        console.log(incident.id)
        return response.json({ ong_id, incident })
    }
}