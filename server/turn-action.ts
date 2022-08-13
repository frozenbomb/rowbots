import { Actor } from "./actor"
import { Card } from "./card"
import { BlockAction, DamageAction } from "./card-action"

export class TurnAction {

    constructor(private action: DamageAction | BlockAction, private performingActor: Actor, private chosenTarget: Actor) {}

    getClassName() { return this.action.getClassName() }

    printAction() {
        console.log(this.performingActor.getName() + 
        " to " + this.action.getText() +
        " " + this.chosenTarget.getName()
        )
    }

    performTurnAction() {
        this.action.performAction([this.chosenTarget])
    }
}