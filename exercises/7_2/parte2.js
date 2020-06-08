const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

//Questão 1
const addTurno = (objeto, chave, valor) => {
  objeto[chave] = valor;
}
addTurno(lesson2, 'turno', 'manhã');

//Questão 2
const listarKeys = (objeto) => {
  const arrayKeys = Object.keys(objeto);
  for(index in arrayKeys) {
    console.log(arrayKeys[index]);
  }
}
//listarKeys(lesson3);

//Questão 3
const tamanhoObjeto = (objeto) => {
  const tamanhoObj = Object.keys(objeto).length;
  return tamanhoObj;
}
//console.log(tamanhoObjeto(lesson3));

//Questão 4
const listarValores = (objeto) => {
  const arrayValores = Object.values(objeto);
  for(index in arrayValores) {
    console.log(arrayValores[index]);
  }
}
//listarValores(lesson3);

//Questão 5
let allLessons = {lesson1, lesson2, lesson3};

//Questão 6
const contarEstudantes = (objeto) => {
  let totalEstudantes = 0;
  for(index in objeto) {
    totalEstudantes += objeto[index].numeroEstudantes;
  }
  console.log(totalEstudantes);
}
//contarEstudantes(allLessons);

//Questão 7
const buscarValor = (objeto, index) => {
  arrayValores = Object.values(objeto);
  const valorBuscado = arrayValores[index];
  return valorBuscado;
}
//console.log(buscarValor(lesson1, 0));

//Questão 8
const verificaExiste = (objeto, chave, valor) => {
  const arrayPares = Object.entries(objeto);
  let existe = false;
  for(index in arrayPares) {
    if(arrayPares[index][0] === chave) {
      if(arrayPares[index][1] === valor) {
        existe = true;
      }
    }
  }
  return existe;
}
//console.log(verificaExiste(lesson3, 'turno', 'noite'));
// Output: true,
//console.log(verificaExiste(lesson3, 'materia', 'Maria Clara'));
// Output: false

//Bonus 1
const contarEstudantesMateria = (objeto, disciplina) => {
  let totalEstudantes = 0;
  for(index in objeto) {
    if(objeto[index].materia === disciplina){
      totalEstudantes += objeto[index].numeroEstudantes;
    }   
  }
  console.log(totalEstudantes);
}
//contarEstudantesMateria(allLessons, 'Matemática');

//Bonus 2
const criarRelatorio = (objeto, prof) => {
  let aulas = [];
  let estudantes = 0;
  for(index in objeto) {
    if(objeto[index].professor === prof){
      aulas.push(objeto[index].materia);
      estudantes += objeto[index].numeroEstudantes;
    }
  }
  const relatorio = {
    'professor': prof,
    'aulas': aulas,
    'estudantes': estudantes
  }
  return relatorio;
}
console.log(criarRelatorio(allLessons, 'Maria Clara'));
