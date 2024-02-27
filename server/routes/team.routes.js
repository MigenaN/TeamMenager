const PlayerController = require('../controllers/team.controller');
module.exports = (app) => {
        app.post("/api/players", PlayerController.createPlayer);
        app.get("/api/players", PlayerController.getPlayers);
        app.get("/api/players/:id", PlayerController.getPlayerById);
        app.put("/api/players/:id", PlayerController.editPlayer);
        app.delete("/api/players/:id", PlayerController.deletePlayer);
        app.patch("/api/players/:id", PlayerController.changeState);
    }