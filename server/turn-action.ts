import { Actor } from "./actor"
import { Card } from "./card"

export class TurnAction {
    private chosenCard: Card
    private performingActor: Actor
    private chosenTarget: Actor

    constructor(chosenCard: Card, performingActor: Actor, chosenTarget: Actor) {
        this.chosenCard = chosenCard
        this.performingActor = performingActor
        this.chosenTarget = chosenTarget
    }

    printAction() {
        console.log(this.performingActor.getName() + 
        " to " + this.chosenCard.getText() +
        " " + this.chosenTarget.getName()
        )
    }

    performTurnAction() {
        this.chosenCard.performCardActions([this.chosenTarget])
    }
}