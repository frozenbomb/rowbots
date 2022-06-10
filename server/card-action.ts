import { Actor } from "./actor"

export class DamageAction {
    private damage: number

    constructor(damage: number) {
        this.damage = damage
    }

    performAction(targets: Array<Actor>) {
        targets.forEach((actor) => {
            actor.performAttack(this.damage)
            console.log(actor.getName() + " took " + this.damage)
            console.log(actor.getName() + " has " + actor.getHealth() + "/" + actor.getMaxHealth())
        })
    }
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
}