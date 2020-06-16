
const customer = {
  firstName: 'Roberto',
  age: 22,
  job: 'Teacher',
}

customer.lastName = 'Corsete';

console.log(customer);


const criarObjeto = (chave, valor) => {
  let objeto = {};
  objeto[chave] = valor;
  console.log (objeto);
}

criarObjeto ('name', 'Lucas');

const listSkills = (estudante) => {
  let listaSkills = Object.keys(estudante);
  console.log(listaSkills);
  for(let i = 0; i < listaSkills.length; i += 1) {
    console.log(`${listaSkills[i]}, Nível: ${estudante[listaSkills[i]]}`);
  }
}
const student1 = {
  Html: 'Muito Bom',
  Css: 'Bom',
  JavaScript: 'Ótimo',
  SoftSkills: 'Ótimo',
};
listSkills(student1);