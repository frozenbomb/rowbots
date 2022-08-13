import { Actor } from "./actor"

export class DamageAction {

    constructor(private damage: number) {}

    performAction(targets: Array<Actor>) {
        targets.forEach((actor) => {
            actor.performAttack(this.damage)
            console.log(actor.getName() + " took " + this.damage)
            console.log(actor.getName() + " has " + actor.getHealth() + "/" + actor.getMaxHealth())
        })
    }

    getText() { return "attack for " + this.damage }

    getClassName() { return "damage" }
}

export class BlockAction {
    private block: number

    constructor(block: number) {
        this.block = block
    }

    performAction(targets: Array<Actor>) {
        targets.forEach((actor) => {
            actor.addBlock(this.block)
            console.log(actor.getName() + " added " + this.block)
            console.log(actor.getName() + " has " + actor.getBlock() + " block")
        })
    }

    getText() { return "attack for " + this.block }
    getClassName() { return "block" }
}