import c from "./cursos4.js" //Posso importar "c" pois no arquivo de módulo, "Cursos" que quero acessar, é um default, então não preciso necessáriamente chamar pelo seu nome.

c.apagarCursos()
c.addCurso("Photoshop")

console.log(c.getTodosCursos());