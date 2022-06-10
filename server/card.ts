import { Actor } from "./actor"
import { CardAction } from "./card-action"

export class Card {
    private text: string
    private id: string
    private cardActions: Array<CardAction>

    constructor(text, id, cardActions: Array<CardAction>) {
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