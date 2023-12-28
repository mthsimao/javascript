const carros = ['Honda', 'Polo', 'Gol', 'Onix', 'Civic', 'GTR']

class Cursos {
    static cursos = ['JavaScript', 'Python', 'C++', 'React', 'PHP']
    
    constructor(){}

    static getTodosCursos = () => {
        return this.cursos
    }

    static getCurso = (indexCurso) => {
        return this.cursos[indexCurso]
    }

    static adicionarCurso = (newCurso) => {
        this.cursos.push(newCurso)
    }

    static deleteCurso = () => {
        this.cursos = []
    }
}

export default function getCarros() {
    return carros
}
export {carros, Cursos}