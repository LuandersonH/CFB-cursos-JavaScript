const cursos = ["JavaScript", "HTML", "CSS", "React", "Python", "Java", "C#"]

// const getTodosCursos=()=>{
//     return cursos
// }

// SÓ PODEMOS TER 1 EXPORT DEFAULT POR CÓDIGO
export default function getTodosCursos() { 
    return cursos
}

function getCurso(i_curso) {
    return cursos[i_curso]
}

export {cursos, getCurso}


