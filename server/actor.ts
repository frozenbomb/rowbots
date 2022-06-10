import { Card } from "./card"

export class Actor {
    private id: string
    private name: string
    private currHealth: number
    private maxHealth: number
    private speed: number
    private cards: Array<Card>
    private isPlayer: boolean

    constructor(cards: Array<Card>, id: string, name: string, maxHealth: number, speed: number, isPlayer){
        this.id = id
        this.name = name
        this.currHealth = maxHealth
        this.maxHealth = maxHealth
        this.speed = speed
        this.cards = cards
        this.isPlayer = isPlayer
    }

    getIsPlayer() { return this.isPlayer }

    getId() { return this.id }

    getName() { return this.name }

    setCards(cards: Array<Card>) { this.cards = cards }

    getCards() { return this.cards }

    getHealth() { return this.currHealth }

    changeHealth(amount: number) { this.currHealth += amount }

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