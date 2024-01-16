import { contatos } from "./bancoContatos.js";

let contato = {
    getTodosContatos:function(){
        return contatos
    },

    getContato:function(indexContato) {
        return contatos[indexContato]
    },

    addContato:function(novoContato, destinoDom){

        const divContact = document.createElement('div')
        divContact.setAttribute('class', 'contato')
        
        const nomeContact = document.createElement('p')
        nomeContact.innerHTML = `Nome: ${novoContato.nome}`

        const cellContact = document.createElement('p')
        cellContact.innerHTML = `Celular: ${novoContato.cell}`

        const emailContact = document.createElement('p')
        emailContact.innerHTML = `Email: ${novoContato.email}`
        
        divContact.appendChild(nomeContact)
        divContact.appendChild(cellContact)
        divContact.appendChild(emailContact)

        destinoDom.appendChild(divContact)

    },
}

export default contato