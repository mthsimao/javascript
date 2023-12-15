// PERGUNTA
let numQuestao = document.querySelector('#numQuestao')
let pergunta = document.querySelector('#pergunta')

let placar = 0
let pontos = 0

// AVISO
let aviso = document.querySelector('#aviso')
let instrucoes = document.querySelector('.instrucoes')

// ARTICLE DAS QUESTOES
let articleQuestoes = document.querySelector('.questoes')

// ALTERNATIVAS 
let alternativas = document.querySelector('#alternativas')

let a = document.querySelector('#a')
let b = document.querySelector('#b')
let c = document.querySelector('#c')

// BOTAO REINICIAR

let btnReiniciar = document.querySelector('.btn>button')

btnReiniciar.style.display = 'none'

const q0 = {
    numQuestao: 0,
    pergunta: 'pergunta',
    alternativaA: 'Alternativa A',
    alternativaB: 'Alternativa B',
    alternativaC: 'Alternativa C',
    correta: '0'
}

const q1 = {
    numQuestao: 1,
    pergunta: 'Em que ano Pedro Álvares Cabral descobriu o Brasil?',
    alternativaA: '1502',
    alternativaB: '1500',
    alternativaC: '1498',
    correta: '1500'
}

const q2 = {
    numQuestao: 2,
    pergunta: 'Qual continente se localiza a Polônia?',
    alternativaA: 'África',
    alternativaB: 'Ásia',
    alternativaC: 'Europa',
    correta: 'Europa'
}

const q3 = {
    numQuestao: 3,
    pergunta: 'Quem é o verdadeiro criador da Apple?',
    alternativaA: 'Steve Jobs',
    alternativaB: 'Tim Cook',
    alternativaC: 'Mark Zuckerberg',
    correta: 'Steve Jobs'
}

const q4 = {
    numQuestao: 4,
    pergunta: 'Qual país foi feita a primeira fotografia?',
    alternativaA: 'Espanha',
    alternativaB: 'Turquia',
    alternativaC: 'França',
    correta: 'França'
}

const q5 = {
    numQuestao: 5,
    pergunta: 'Boreal é o mesmo que...',
    alternativaA: 'Sul',
    alternativaB: 'Norte',
    alternativaC: 'Leste',
    correta: 'Norte'
}

const q6 = {
    numQuestao: 6,
    pergunta: 'Em qual país tem o fenômeno mais conhecido como Aorora Boreal? ',
    alternativaA: 'Finlândia',
    alternativaB: 'Rússia',
    alternativaC: 'Grécia',
    correta: 'Finlândia'
}


const questoes = [q0, q1, q2, q3, q4, q5, q6]

let numero = document.querySelector('#numero')
let total = document.querySelector('#total')

numero.textContent = q1.numQuestao

let totalDeQuestoes = (questoes.length)-1
total.textContent = totalDeQuestoes

// MONTAR A PRIMEIRA QUESTAO

numQuestao.textContent = q1.numQuestao
pergunta.textContent = q1.pergunta

a.textContent = q1.alternativaA
b.textContent = q1.alternativaB
c.textContent = q1.alternativaC

// CONFIGURAR O VALUE INICIAL DA 1A QUESTAO

a.setAttribute('value', '1A')
b.setAttribute('value', '1B')
c.setAttribute('value', '1C')

function proximaQuestao(nQuestao) {
    numero.textContent = nQuestao

    numQuestao.textContent = questoes[nQuestao].numQuestao
    pergunta.textContent = questoes[nQuestao].pergunta
    
    a.textContent = questoes[nQuestao].alternativaA
    b.textContent = questoes[nQuestao].alternativaB
    c.textContent = questoes[nQuestao].alternativaC
    
    a.setAttribute('value', `${nQuestao}A`)
    b.setAttribute('value', `${nQuestao}B`)
    c.setAttribute('value', `${nQuestao}C`)
}

function bloquearAlternativas() {
    a.classList.add('bloqueado')
    b.classList.add('bloqueado')
    c.classList.add('bloqueado')
}

function desbloquearAlternativas() {
    a.classList.remove('bloqueado')
    b.classList.remove('bloqueado')
    c.classList.remove('bloqueado')
}

function verificarSeAcertou(nQuestao, resposta) {
    let numeroDaQuestao = nQuestao.value
    //console.log('Numero da questão: ' + numeroDaQuestao)

    let repostaEscolhida = resposta.textContent
    //console.log('Reposta do usuário: ' + repostaEscolhida)

    let respostaCorreta = questoes[numeroDaQuestao].correta
    //console.log('Resposta correta: ' + respostaCorreta)

    //VERIFICAÇÃO DE QUE SE A REPOSTA ESCOLHIDA PELO USUÁRIO, ESTÁ CORRETA OU NÃO
    if(repostaEscolhida == respostaCorreta) {
        pontos += 10
    } else {
        console.log('Errou!')
    }

    bloquearAlternativas()

    setTimeout(function() {

        //Atualizar os pontos
        placar = pontos
        instrucoes.textContent = "Pontos: " + placar

        proxima = numeroDaQuestao+1
    
        if(proxima > totalDeQuestoes) {
            console.log('Fim de Jogo!')
            fimDeJogo()
        } else {
            proximaQuestao(proxima)
        }
    }, 290)

    desbloquearAlternativas()

}

function fimDeJogo() {
    bloquearAlternativas()
    
    instrucoes.textContent = 'Fim de jogo'
    numQuestao.style.display = 'none'
    
    pergunta.textContent = `Você conseguiu ${pontos} pontos`
    pergunta.style.textAlign = 'center'
    
    aviso.textContent = `Você deseja reinicar o quiz? Clique no botão abaixo.` 

    a.textContent = ''
    b.textContent = ''
    c.textContent = ''

    a.setAttribute('value', '')
    b.setAttribute('value', '')
    c.setAttribute('value', '')

    btnReiniciar.style.display = 'block'
} 

const reiniciarQuiz = () => {
    location.reload()
}