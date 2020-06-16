const assert = require('assert');

function myIndexOf(arr, item) {
  let searchedIndex = -1;
  for (let i = 0; i < arr.length; i += 1) {
    if (item === arr[i]) {
      searchedIndex = i;
    }
  }
  return searchedIndex;
}

// implemente seus testes aqui
assert.strictEqual(myIndexOf([1, 2, 3, 4], 3), 2);
assert.strictEqual(myIndexOf([1, 2, 3, 4], 5), -1);
