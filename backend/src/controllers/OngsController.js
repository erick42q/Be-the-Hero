const geterateUniqueId = require("../utils/geterateUniqueId")
const connect = require("../database/connection")


list = async (request, response) => {
    const ongs = await connect('ongs').select('*')
    
    return response.json({ongs})
}

create = async (request, response) => {
    const { name, email, whatsapp, city, uf } = request.body

    const id = geterateUniqueId()

    await connect('ongs').insert({ 
        id,
        name,
        email,
        whatsapp,
        city,
        uf 
    })

    response.json({
        id
    })
}


module.exports = {list, create}