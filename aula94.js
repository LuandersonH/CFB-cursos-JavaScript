// import getTodosCursos from "./cursos3.js";
// import {cursos as c, getCurso as gc} from "./cursos3.js"

import * as m_curso from "./cursos3.js"

//* pega tudo que foi exportado pelo arquivo de módulo.

// cursos as c = "as c", "as a", "as b", renomeia o objeto importado

console.log(m_curso.default());
console.log(m_curso.cursos);
console.log(m_curso.getCurso(0));

