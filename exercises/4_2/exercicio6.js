let numbers = [50, 90, 30, 190, 70, 80, 100, 2, 350, 270];
let qtdeImpar = 0;

for (let i = 0; i < numbers.length; i += 1){
  if (numbers[i] % 2 !== 0){
    qtdeImpar = qtdeImpar + 1;
  }
}

if (qtdeImpar !== 0){
  console.log(qtdeImpar);
} else{
  console.log('nenhum valor ímpar encontrado');
}

