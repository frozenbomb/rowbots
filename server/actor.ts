import { Card } from "./card"

export class Actor {
    private currHealth: number
    private block: number

    constructor(private cards: Array<Card>, private id: number, private name: string, private maxHealth: number, 
            private speed: number, private isPlayer: boolean){
        this.currHealth = maxHealth
        this.block = 0
    }

    getIsPlayer() { return this.isPlayer }

    getId() { return this.id }

    getName() { return this.name }

    setCards(cards: Array<Card>) { this.cards = cards }

    getCards() { return this.cards }

    getHealth() { return this.currHealth }

    addBlock(block: number) { this.block += block }

    resetBlock() { this.block = 0 }

    getBlock() { return this.block }

    performAttack(amount: number) {
        if (this.block === 0) {
            this.currHealth -= amount
        }
        else if (this.block >= amount) {
            this.block -= amount
        } else {
            this.currHealth = this.currHealth - (this.block - amount)
            this.block = 0
        }
    }

    resetHealth() { this.currHealth = this.maxHealth }

    setMaxHealth(max: number) { 
        this.maxHealth = max
        this.currHealth = this.maxHealth 
    }

    getMaxHealth() { return this.maxHealth }

    setSpeed(speed: number) { this.speed = speed }

    getSpeed() { return this.speed }

    chooseCard(num: number) { return this.cards[num] }

    getCardAmount() { return this.cards.length }
}