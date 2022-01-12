class Ninja{
    constructor (name, health, speed, strength){
        this.name = name 
        this.health = health
        this.speed = 3
        this.strength = 3
    }

    sayName(){
        console.log(`${this.name}`)
        return this;
    }

    showStats(){
        console.log(`${this.name}`)
        console.log(`${this.health}`)
        console.log(`${this.speed}`)
        console.log(`${this.strength}`)
        return this;
    }

    drinkRainier(){
        console.log(`${this.name} drank the best beer ever`)
        this.health += 10
    }
}

const ninja1 = new Ninja("James", 100)
console.log(ninja1)
ninja1.sayName().showStats().drinkRainier()
ninja1.showStats()