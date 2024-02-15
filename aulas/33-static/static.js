class Npc {
    static alerta = false
    // alerta default = false
    constructor(energia) {
        this.energia = energia
    }

    info = function(){
        console.log(`Energia: ${this.energia}`)
        console.log(`Alerta: ${Npc.alerta?"sim":"não"}`)
        // não utilizo this.alerta pq está fora do constructor e é estática
        console.log('-------------------------')
    }

    static alertar = function() {
        Npc.alerta = true
    }
}

const npc1 = new Npc(100)
const npc2 = new Npc(40)
const npc3 = new Npc(80)

// defini que todos os alertas estão true 
// não preciso puxar todos os npc's e definir o alerta true

Npc.alertar()

npc1.info()
npc2.info()
npc3.info()