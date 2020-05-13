let pecaXadrez = "BISPO";

pecaXadrez = pecaXadrez.toLowerCase();

switch(pecaXadrez){
  case 'peão':
    console.log("Um movimento para frente e ataque na diagonal");
    break;

    case 'torre':
    console.log("Movimentos livres em linha reta");
    break;

    case 'cavalo':
    console.log("Movimento em 'L'");
    break;

    case 'bispo':
    console.log("Movimentos livres na diagonal");
    break;

    case 'rainha':
    console.log("Movimentos livres em linha reta e na diagonal");
    break;

    case 'rei':
    console.log("Um movimento em linha reta ou na diagonal");
    break;

    default:
    console.log("Insira um nome de peça válido");
    break;
}