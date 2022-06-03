var clientId = "111"
var currHealth = 50
var maxHealth = 50
var speed = 20
var cards = []

function setCards(cards) { cards = cards }

function getCards() { return cards }

function changeHealth(amount) { currHealth += amount }

function resetHealth() { currHealth = maxHealth }

function getPlayer() {
    return {
        "clientId": clientId,
        "health": currHealth,
        "maxHealth": maxHealth,
        "speed": speed,
        "cards": cards
    }
}