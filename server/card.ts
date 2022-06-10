import { Actor } from "./actor"
import { BlockAction, DamageAction } from "./card-action"

export class Card {
    private text: string
    private id: number
    private cardActions: Array<DamageAction | BlockAction>

    constructor(text: string, id: number, cardActions: Array<DamageAction | BlockAction>) {
        this.text = text
        this.id = id
        this.cardActions = cardActions
    }

    getText() { return this.text }

    performCardActions(targets: Array<Actor>) { 
        this.cardActions.forEach((action) => {
            action.performAction(targets)
        })
    }
}