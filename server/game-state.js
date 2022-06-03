const Actor = require('./actor.js') 

var cards = [
    {
        "text": "attack for 4",
        "id": "1"
    },
    {
        "text": "block for 2",
        "id": "2"
    }
]

class GameState {
    constructor(){
        this.turn = 0
        this.players = []
        this.enemies = []
    }

    startGame() {
        this.players.push(new Actor(cards, "111", 50, 20))
        this.startEncounter()
        this.startTurn()
    }
    
    startEncounter() {
        this.turn = 1
    
        var enemy = new Actor(cards, "222", 10, 10)
    
        this.enemies.push(enemy)
    }
    
    startTurn() {
        this.enemies.forEach((enemy) => {
            enemy.setTarget("111")
            var chosenCard = Math.floor(Math.random() * enemy.getCardAmount())
            var card = enemy.chooseCard(chosenCard)
            console.log("Enemy plans to " + card.text)
        })
    }
    
    playerTurnInfo = function() {
        return {
            "clientId": this.players[0].getId(),
            "turn": this.turn,
            "cards": this.players[0].cards
        }
    }
    
}

module.exports = GameState