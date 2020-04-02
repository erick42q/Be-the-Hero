const express = require("express");
const { celebrate, Segments, Joi } = require("celebrate")

const OngsControlle = require("./controllers/OngsController")
const IncidentsControlle = require("./controllers/IncidentsController")
const ProfileController = require("./controllers/ProfileController")
const SessionController = require("./controllers/SessionController")


const routes = express.Router();

routes.post("/session", SessionController.create)

routes.get("/profile/", celebrate({
    [Segments.HEADERS]: Joi.object({
        authorization: Joi.string().required(),
    }).unknown(),
}), ProfileController.list)

routes.post("/ongs", OngsControlle.list)
routes.post("/ong/create", celebrate({
    [Segments.BODY]: Joi.object().keys({
        name: Joi.string().required(),
        email: Joi.string().email().required(),
        whatsapp: Joi.string().required().min(10).max(11),
        city: Joi.string().required(),
        uf: Joi.string().length(2).required(),
    })
}), OngsControlle.create)

routes.get("/incidents", celebrate({
    [Segments.QUERY]: Joi.object().keys({
        page: Joi.number(),
    })
}), IncidentsControlle.list)


routes.post("/incident/create", celebrate({
    [Segments.HEADERS]: Joi.object({
        authorization: Joi.string().required(),
    }).unknown(),
    [Segments.BODY]: Joi.object().keys({
        title: Joi.string().required(),
        description: Joi.string().required(),
        value: Joi.number().required(),
    })
}), IncidentsControlle.create)

routes.delete("/incident/:id",  celebrate({
    [Segments.PARAMS]: Joi.object().keys({
        id: Joi.number().required(),
    }),
}), IncidentsControlle.delete)

routes.post("/incident/:id", IncidentsControlle.select)



routes.post("/ping", celebrate({
    [Segments.HEADERS]: Joi.object({
        authorization: Joi.string().required(),
    }).unknown(),
}), ProfileController.ping)

module.exports = routes;