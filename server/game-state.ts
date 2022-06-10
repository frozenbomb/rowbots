import { Actor } from './actor'
import { Card } from './card'
import { BlockAction, DamageAction } from './card-action'
import { TurnAction } from './turn-action'

export class GameState {
    private turn: number
    private actors: Array<Actor>
    private cards: Array<Card>
    private damageAction = new DamageAction(4)
    private blockAction = new BlockAction(2)
    private turnStack: Array<TurnAction>

    constructor(){
        this.turn = 0
        this.actors = []
        this.cards = []
        this.cards.push(new Card("attack 4", 1, [this.damageAction]))
        this.cards.push(new Card("block 2", 2, [this.blockAction]))
        this.turnStack = []
    }

    getTurn() { return this.turn }

    getPlayers() {
        return this.actors.filter((actor) => actor.getIsPlayer())
    }

    getActorById(id: number) {
        return this.actors.find((actor) => actor.getId() === id)
    }

    getEnemies() {
        return this.actors.filter((actor) => !actor.getIsPlayer())
    }

    startGame() {
        this.actors.push(new Actor(this.cards, 111, "Jeff", 50, 20, true))
        this.startEncounter()
        this.startTurn()
    }
    
    startEncounter() {
        this.turn = 1
    
        var enemy = new Actor(this.cards, 222, "Troll", 10, 10, false)
    
        this.actors.push(enemy)
    }
    
    startTurn() {
        const enemies = this.getEnemies()
        const players = this.getPlayers()
        enemies.forEach((enemy) => {
            const chosenCard = Math.floor(Math.random() * enemy.getCardAmount())
            // const chosenCard = 0
            this.addTurnAction(enemy.chooseCard(chosenCard), enemy, players[0])
        })
    }

    addTurnAction(choosenCard: Card, performingActor: Actor, chosenTarget: Actor) {
        const turn = new TurnAction(choosenCard, performingActor, chosenTarget)
        this.turnStack.unshift(turn)
    }

    endTurn() {
        this.turnStack.forEach((turn) => turn.printAction())
        this.turnStack.forEach((turn) => turn.performTurnAction())

        var enemies = this.getEnemies()
        var aliveEnemies = enemies.filter((enemy) => enemy.getHealth() > 0)

        if (aliveEnemies.length < 1) {
            console.log("Defeated all enemies")
            this.turn = -1
        } else {
            this.actors.forEach((actor) => actor.resetBlock())
            this.turnStack = []
        }
    }
    
    playerTurnInfo(id: number) {
        const player = this.getActorById(id)
        return {
            "clientId": player.getId(),
            "turn": this.turn,
            "cards": player.getCards()
        }
    }
    
}