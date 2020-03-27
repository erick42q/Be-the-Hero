const crypto = require("crypto")
const connect = require("../database/connection")


list = async (request, response) => {
    const ongs = await connect('ongs').select('*')
    
    return response.json({ongs})
}

create = async (request, response) => {
    const { name, email, whatsapp, city, uf } = request.body

    const id = crypto.randomBytes(4).toString('HEX')

    await connect('ongs').insert({ 
        id, name, email, whatsapp, city, uf 
    })

    console.log(id)

    response.json({
        id, name
    })
}


module.exports = {list, create}