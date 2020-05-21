//Crie seu código abaixo dessa linha:
let button1 = document.querySelector(".botao1");
let button2 = document.querySelector(".botao2");

button1.addEventListener('mouseover', changeBox1Color);
button2.addEventListener('mouseover', changeBox2Color);

function changeBox1Color(element){
  let box = document.querySelector(".caixa1");
  box.style.backgroundColor = "green";
}
function changeBox2Color(element){
  let box = document.querySelector(".caixa2");
  box.style.backgroundColor = "green";
}

button1.addEventListener('click', ChangeBox1Text);
button2.addEventListener('click', ChangeBox2Text);

function ChangeBox1Text(){
  let box = document.querySelector(".caixa1");
  let newText = document.querySelector(".caixa-texto").value;
  box.innerHTML = newText;
  if(newText != ""){
    alert("Go Trybe!");
  }
}
function ChangeBox2Text(){
  let box = document.querySelector(".caixa2");
  let newText = document.querySelector(".caixa-texto").value;
  box.innerHTML = newText;
  if(newText != ""){
    alert("Go Trybe!");
  }
}
