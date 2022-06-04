import { Actor } from './actor'
import { Card } from './card'

export class GameState {
    private turn: number
    private players: Array<Actor>
    private enemies: Array<Actor>
    private cards: Array<Card>

    constructor(){
        this.turn = 0
        this.players = []
        this.enemies = []
        this.cards = []
        this.cards.push(new Card("attack for 4", 1))
        this.cards.push(new Card("block for 2", 2))
    }

    startGame() {
        this.players.push(new Actor(this.cards, "111", 50, 20))
        this.startEncounter()
        this.startTurn()
    }
    
    startEncounter() {
        this.turn = 1
    
        var enemy = new Actor(this.cards, "222", 10, 10)
    
        this.enemies.push(enemy)
    }
    
    startTurn() {
        this.enemies.forEach((enemy) => {
            enemy.setTarget("111")
            var chosenCard = Math.floor(Math.random() * enemy.getCardAmount())
            var card = enemy.chooseCard(chosenCard)
            console.log("Enemy plans to " + card.getText())
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