const listaEstados = [
  ['Acre', 'AC'],
  ['Alagoas', 'AL'],
  ['Amapá', 'AP'],
  ['Amazonas', 'AM'],
  ['Bahia', 'BA'],
  ['Ceará', 'CE'],
  ['Distrito Federal', 'DF'],
  ['Espírito Santo', 'ES'],
  ['Goiás', 'GO'],
  ['Maranhão', 'MA'],
  ['Mato Grosso', 'MT'],
  ['Mato Grosso do Sul', 'MS'],
  ['Minas Gerais', 'MG'],
  ['Pará', 'PA'],
  ['Paraíba', 'PB'],
  ['Paraná', 'PR'],
  ['Pernambuco', 'PE'],
  ['Piauí', 'PI'],
  ['Rio de Janeiro', 'RJ'],
  ['Rio Grande do Norte', 'RN'],
  ['Rio Grande do Sul', 'RS'],
  ['Rondônia', 'RO'],
  ['Roraima', 'RR'],
  ['Santa Catarina', 'SC'],
  ['São Paulo', 'SP'],
  ['Sergipe', 'SE'],
  ['Tocantins', 'TO']
];
const containerNome = document.getElementById('nome');
const containerEmail = document.getElementById('email');
const containerCPF = document.getElementById('cpf');
const containerEndereco = document.getElementById('endereco');
const containerCidade = document.getElementById('cidade');
const containerEstados = document.getElementById('estados');
const containerCasa = document.getElementById('casa');
const containerApart = document.getElementById('apart');
const containerResumo = document.getElementById('resumo');
const containerCargo = document.getElementById('cargo');
const containerDataInicio = document.getElementById('data-inicio');
const divDadosInseridos = document.getElementById('dados-inseridos');
const botaoSubmit = document.getElementById('submit');
const padraoData = /^[0-9]{2}\/[0-9]{2}\/[0-9]{4}$/;
let dataValida = false;

function criarListaEstado() {
  for (let i = 0; i < listaEstados.length; i += 1) {
    const estado = document.createElement('option');
    containerEstados.appendChild(estado);
    containerEstados.children[i].innerText = listaEstados[i][0];
  }
}

function verificaData() {
  if (!padraoData.test(containerDataInicio.value)) {
    alert('Digite uma data no formato válido: dd/mm/aaaa');
  } else {
    const data = containerDataInicio.value;
    let dia = data.split("/")[0];
    let mes = data.split("/")[1];
    let ano = data.split("/")[2];
    let MyData = new Date(ano, mes - 1, dia);
    if ((MyData.getMonth() + 1 != mes)
       ||(MyData.getDate() != dia)
       ||(MyData.getFullYear() != ano)) {
         alert("Valores inválidos para o dia, mês ou ano. Por favor corrija.");
    } else {
         dataValida = true;
    }
  }
}

function mostrarDados() {
  const labels = document.querySelectorAll('fieldset label');
  const valores = document.querySelectorAll('fieldset input');
  for (let i = 0; i < labels.length; i+= 1) {
    divDadosInseridos.innerHTML += labels[i].innerText;
    divDadosInseridos.innerHTML += `${valores[i].value}<br>`;

  }
}

function consolidar() {
  verificaData();
  mostrarDados();
}
botaoSubmit.addEventListener('click', consolidar);

function initi() {
  criarListaEstado();
}

window.onload = initi();
