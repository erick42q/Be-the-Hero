const express = require("express");

const OngsControlle = require("./controllers/OngsController")
const IncidentsControlle = require("./controllers/IncidentsController")
const ProfileController = require("./controllers/ProfileController")
const SessionController = require("./controllers/SessionController")


const routes = express.Router();

routes.post("/session", SessionController.create)

routes.get("/profile/", ProfileController.list)

routes.post("/ongs", OngsControlle.list)
routes.post("/ong/create", OngsControlle.create)

routes.get("/incidents", IncidentsControlle.list)
routes.post("/incident/create", IncidentsControlle.create)
routes.delete("/incident/:id", IncidentsControlle.delete)
routes.post("/incident/:id", IncidentsControlle.select)



routes.post("/ping", ProfileController.ping)

module.exports = routes;