function forLoop(array) {
  for(let i = 1; i < 26; i++) {
    if (i === 1) {
      array.push ("I am 1 strange loop.");
    } else if (i > 1 && i <= 26) {
      array.push ("I am " + i + " strange loops.");
    }
  }
  return array;
}

function whileLoop(n) {
  while (n > 0) {
    console.log(n);
    n --;
  }
  return "done"
}

function doWhileLoop(array) {
  function maybeTrue() {
    return Math.random() >= 0.5
   }

  do {
    array.shift()
  }
  while (array.length > 0 && maybeTrue());
  return array;
}
