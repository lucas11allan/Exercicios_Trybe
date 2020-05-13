let a = 50;
let b = 50;
let c = 80;

let somaAngulos = a + b + c;

if(a<0 || a>360 || b<0 || b>360 || c<0 || c>360){
  console.log("Insira valores de angulo válidos");
} else if(somaAngulos = 180){
  console.log("true");
} else {
  console.log("false");
}