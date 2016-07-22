// we create an array of words used for the hangman game
var randomWordArr = ["beer", "wine", "chimay", "brewery", "alcohol"]
// we choose a random word from teh array above
var randomWord = randomWordArr[Math.floor(Math.random() * randomWordArr.length)]
// global variables
var s
var count = 0
// empty array to stores guesses
var answerArray = []

// _____ underline blanks
function startUp() {
  for (var i = 0; i < randomWord.length; i++) {
    answerArray[i] = "_";
  }
  s = answerArray.join(" ");
  document.getElementById("answer").innerHTML = s;
}

function letter() {
  //here we get the letter that the user typed in the box
  var letter = document.getElementById("letter").value;
  // guess the amount of letters in array
  if(letter.length > 0) {
      for(var i = 0; i < randomWord.length; i++) {
        //now, if the random word contains the letters uer typed in
        if(randomWord[i] === letter) {
          // assingn it to letter
          answerArray[i] = letter;
        }
      }
    // add one for everytime guess
    count++
    document.getElementById("counter").innerHTML = "No of clicks: " + count;
    document.getElementById("answer").innerHTML = answerArray.join(" ");
  }
  //if you tried 5 times
  if(count > 5) {
    alert("you tried too many times")
  }
  
}


window.onload = startUp;
