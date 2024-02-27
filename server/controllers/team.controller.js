const Player = require('../models/team.model');

module.exports.createPlayer = (req, res) => {
    Player.create(req.body)
    .then(player => res.json(player))
    .catch(err => res.status(400).json(err));
};

module.exports.getPlayers = (req, res) => {
    Player.find()
    .sort({ name: 1 }) 
    .then(players => res.json(players))
    .catch(err => res.status(400).json(err));
};

module.exports.getPlayerById = (req, res) => {
    Player.findById(req.params.id)
    .then(player => {
        if (!player) {
        res.status(404).json({ message: "Player not found" });
        return;
        }
        res.json(player);
    })
    .catch(err => res.status(400).json(err));
};

module.exports.editPlayer = (req, res) => {
Player.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })
    .then(player => {
        if (!player) {
        res.status(404).json({ message: "Player not found" });
        return;
        }
        res.json(player);
    })
    .catch(err => res.status(400).json(err));
};

module.exports.deletePlayer = (req, res) => {
    Player.findByIdAndDelete(req.params.id)
    .then(player => {
        if (!player) {
        res.status(404).json({ message: "Player not found" });
        return;
        }
        res.json({ message: "Player deleted successfully" });
    })
    .catch(err => res.status(400).json(err));
};
module.exports.changeState = (req, res) => {
    Player.findById(req.params.id)
      .then((player) => {
        if (!player) {
          return res.status(404).json({ message: 'Player not found' });
        }
  
        player.state = req.body.state;
        return player.save();
      })
      .then((updatedPlayer) => res.json(updatedPlayer))
      .catch((err) => res.status(400).json(err));
  };
