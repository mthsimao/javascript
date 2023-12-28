import { contatos } from "./bancoContatos.js"
import contato from "./contatos.js"


let res = document.querySelector('.list-contacts')
let btn = document.querySelector('.btn')



btn.addEventListener('click', (evt) => {

    const contact = {
        nome:document.querySelector('#iname').value,
        cell:document.querySelector('#icell').value,
        email:document.querySelector('#iemail').value
    }

    contatos.push(contact) // add the contact on array

    contato.addContato(contact, res)
})