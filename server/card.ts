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

    performCardActions(target) { 
        this.cardActions.forEach((action) => {
            action.performAction(target)
        })
    }
}