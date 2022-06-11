const url = "https://kids-jokes-api.herokuapp.com/rjoke";
let joke;

function getJoke() {
fetch(url)
.then(res => res.json())
.then(data => {
    joke = data;
    writeQuestion();
    writeAnswer();
})
} 


function playAudio() {
    getJoke();
    let path = pickRandomSound();
    let sound = new Audio(path);
    sound.play();
}

function pickRandomSound() {
  let num = Math.floor(Math.random() * 19);
  let path = "./sounds/soundEffect" + num + ".mp3";
  console.log(path);  
  return path;
}

function writeQuestion() {
    document.getElementById("question").innerText = joke.question;
}
function writeAnswer() {
    document.getElementById("answer").innerText = joke.answer;
}
getJoke();