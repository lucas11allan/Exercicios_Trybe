const fatorial = (num) => {
  let result = 1;
  for(let i = num; i > 1; i -= 1) {
    result = i * result;
  }
  return(result);
}

const longestWord = (word) => {
  const arrayWord = word.split(' ');
  let bigWord = 0;
  for(i = 0; i < arrayWord.length; i += 1) {
    if(arrayWord[i].length > arrayWord[bigWord].length) {
      bigWord = i;
    }
  }
  return(arrayWord[bigWord]);
}

const space = document.getElementById('clicks'); 
const button = document.getElementById('button');
let qtdeClicks = 0;
const clicks = () => {
  qtdeClicks += 1;
  space.innerText = qtdeClicks;
}
button.addEventListener('click', clicks);