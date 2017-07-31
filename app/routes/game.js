import Game from '../models/game';

//Get al the game sorted by postDate
const getGames = (req, res) => {
    //Qu8ery the db, if no errors send all the games to the client
    Game.find(null, null, {sort: { postDate : 1 } }, (err, games) => {
        if ( err ) {
            res.send(err);
        }
        res.json(games); //Games sent as json
    });
}

//Get a single game filtered by ID
const getGame = (req, res) => {
    const { id } = req.params;
    //Qjuery the db for a single game, if no errors send it to the client
    Game.findById(id, (err, game) => {
        if ( err ) {
            res.send(err);
        }
        res.json(game); // Game send as json
    });
}

