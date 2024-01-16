// import getCarros, { carros, Cursos } from "./objects.js";

import * as objetosImportados from './objects.js';

console.log( objetosImportados.default() );

// all courses
console.log(objetosImportados.Cursos.getTodosCursos() );

// add new course
objetosImportados.Cursos.adicionarCurso('Tailwind Css')
console.log( objetosImportados.Cursos.getTodosCursos())

// see course 

console.log(objetosImportados.Cursos.getCurso(3))