import { Actor } from "./actor"
import { BlockAction, DamageAction } from "./card-action"

export class Card {

    constructor(private text: string, private id: number, private cardActions: Array<DamageAction | BlockAction>) {}

    getDescriptionText() { return this.text }

    getCardActions() { return this.cardActions }
}