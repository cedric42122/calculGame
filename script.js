document.getElementById("gameZone").hidden = true;

function gameStart() {
  if (document.getElementById("gameZone").hidden = false)
    return document.getElementById("gameStart").hidden = true; 
  else (document.getElementById("gameStart").hidden = true)
    return document.getElementById("gameZone").hidden = false;  
}

function randomIntFromInterval(min, max) { 
    return Math.floor(Math.random() * (max - min + 1) + min)
  }
  
  const rndInt1 = randomIntFromInterval(1, 10)
  const rndInt2 = randomIntFromInterval(1, 10)
  var result = rndInt1 + rndInt2;
  document.getElementById('num').textContent = rndInt1 + "+" + rndInt2;

  let time = 10
  const timerElement = document.getElementById("timer")

  function decreaseTime() {
    timerElement.innerText = "Il reste "+ time + " secondes"
    if(time > 0)
    time--

    else {
      return document.getElementById("timer").textContent = "Vous avez mis trop de temps pour répondre !"
    }
  }

  setInterval(decreaseTime, 1000)

function answerAnalysis() {
  var answer = parseInt(document.getElementById("answer").value);
    if (answer == result) {
      return document.getElementById('answerText').textContent="C'est une bonne réponse !";
    }
    else {
      return document.getElementById('answerText').textContent="Ce n'est pas la bonne réponse ...recommence !";
    }
  } 

function pressReturn() {
  if (event.keyCode === 13) {
    return answerAnalysis();
  }
}

console.log("ppl");
