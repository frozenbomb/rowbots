import { Actor } from "./actor"

export class CardAction {
    private damage: number

    constructor(damage: number) {
        this.damage = damage
    }

    performAction(targets: Array<Actor>) {
        targets.forEach((actor) => {
            actor.changeHealth(this.damage)
            console.log("actor took " + this.damage)
        })
    }
}