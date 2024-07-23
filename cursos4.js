class Cursos {
    static cursos= ["JavaScript", "HTML", "CSS", "React", "Python", "Java", "C#"]
    constructor(){}
    static getTodosCursos=()=>{
        return this.cursos
    }

    static getCurso=(i_curso)=>{
        return this.cursos[i_curso]
    }

    static addCurso=(novoCurso)=>{
        this.cursos.push(novoCurso)
    }

    static apagarCursos=(apagarCursos)=>{
        this.cursos=[]
    }
}

export default Cursos