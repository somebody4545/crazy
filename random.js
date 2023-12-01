addEventListener("scroll", (event) => {
  // Get all elements with the class "block"
  const blocks = document.getElementsByClassName("block");

  // Loop through each block element
  const block = blocks[blocks.length - 1];

  // Find index of every space in the block element
  const spaces = [];
  for (let j = 0; j < block.innerHTML.length; j++) {
    if (block.innerHTML[j] === " ") {
      spaces.push(j);
    }
  }

  // remove 10% of the spaces randomly
  const randomSpaces = [];
  for (let k = 0; k < spaces.length; k++) {
    if (Math.random() < 0.1) {
      randomSpaces.push(spaces[k]);
    }
  }

  // remove the char at indexes found in randomSpaces
  for (let l = 0; l < randomSpaces.length; l++) {
    block.innerHTML = block.innerHTML.slice(0, randomSpaces[l] - l) + block.innerHTML.slice(randomSpaces[l] - l + 1);
  }
});