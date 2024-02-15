class Npc {
    static alerta = false
    constructor(energia) {
        this.energia = energia
    }

    info = function(){
        console.log(`Energia: ${this.energia}`)
        console.log(`Alerta: ${Npc.alerta?"sim":"não"}`)
        console.log('-------------------------')
    }
}

const npc1 = new Npc(120)
const npc2 = new Npc(40)
const npc3 = new Npc(80)

// Npc.alerta = true

npc1.info()
npc2.info()
npc3.info()