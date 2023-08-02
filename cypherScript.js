const display = document.querySelector(".inputText");
const buttons = document.querySelector(".buttons");

buttons.addEventListener("click", (e) => {
  if (e.target.matches("button")) {
    const key = e.target;
    const action = key.dataset.action;

    if (action === "cypher") {
      let a = display.value;
      display.value = cypher(a);
    }
  }
});

//Table containing the alphabet used to shift the given string
const lookUpTable = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

// this function takes a string contianing letters and symbols, upper or lower case and returns a new uppercase string, with each letter being shifted 13 places in the alphabet, ex: A = N
function cypher(str) {
  //takes the given string and splits it into an array by word
  let arr1 = str.toUpperCase().split(" ");
  let result = [];

  //1st loop iterates over the array by word
  for (let i = 0; i < arr1.length; i++) {
    let arr2 = arr1[i].split("");
    let word = [];

    //2nd loop splits each word into a new array and itterates over each letter shifting it 13 places
    for (let j = 0; j < arr2.length; j++) {
      let indexLetter = lookUpTable.indexOf(arr2[j]);

      if (indexLetter === -1) {
        word.push(arr2[j]);
        break;
      }

      let letter = indexLetter - 13;

      if (letter < 0) {
        letter += lookUpTable.length;
      }

      //takes each shifted letter of the word and pushes it into a word array
      word.push(lookUpTable[letter]);
    }
    //after each letter has been shifted and pushed into the word array, it is joined and pushed into the final result array
    result.push(word.join(""));
  }
  //the result array is joined to create a new string with the shifted characters, keeping a space between each word.
  return result.join(" ");
}
