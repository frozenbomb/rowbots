export class Card {
    private text: string
    private id: string

    constructor(text, id) {
        this.text = text
        this.id = id
    }

    getText() { return this.text }
}