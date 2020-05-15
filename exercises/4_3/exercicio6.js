let num = 997;
let checagem = 0;

for (let i = 0; i < num; i += 1){
  if (num % i === 0){
    checagem += 1;
  }
  if (checagem > 2){
    break;
  }
}

if (checagem > 2){
  console.log("O número não é primo");
} else {
  console.log("O número é primo");
}