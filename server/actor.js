class Actor {
    constructor(cards, id, maxHealth, speed){
        this.id = id
        this.currHealth = maxHealth
        this.maxHealth = maxHealth
        this.speed = speed
        this.cards = cards
        this.target = ""
    }

    getId() { return this.id }

    setCards(cards) { this.cards = cards }

    getCards() { return this.cards }

    changeHealth(amount) { this.currHealth += amount }

    resetHealth() { this.currHealth = maxHealth }

    setMaxHealth(max) { 
        this.maxHealth = max
        this.currHealth = this.maxHealth 
    }

    setSpeed(speed) { this.speed = speed }

    getSpeed() { return this.speed }

    chooseCard(num) { return this.cards[num] }

    getCardAmount() { return this.cards.length }

    setTarget(target) { this.target = target }
}

module.exports = Actor