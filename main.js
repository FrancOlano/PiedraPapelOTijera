var piedra = "✊";
var papel = "✋";
var tijera = "✌";

let btnPiedra = document.getElementById("piedra");
let btnPapel = document.getElementById("papel");
let btnTijera = document.getElementById("tijera");
let player;
let computer;

let puntajeComputer = 0;
let puntajePlayer = 0;
let results = document.getElementById("results");

function actaulizarResults() {
  if (puntajeComputer >= 3) {
    
    results.innerHTML =
    "Gana la Computadora";
  }else if(puntajePlayer >= 3){
    
    results.innerHTML =
    "Ganaste 🎉";
  } else {
    results.innerHTML =
    "Computer: " + puntajeComputer + "        Tu: " + puntajePlayer;
  }
  
}
actaulizarResults();

const computerPlay = () => {
  let num =
    Math.round(Math.random()) +
    Math.round(Math.random()) +
    Math.round(Math.random());

  if (num <= 1) {
    computer = tijera;
  } else if (num === 2) {
    computer = piedra;
  } else if (num === 3) {
    computer = papel;
  }
};
console.log("🏁Que comienze el juego🏁");



btnPiedra.addEventListener("click", () => {
  player = piedra
  computerPlay();

  if (player == computer) {
    console.log("tu: " + player);
    console.log("computer: " + computer);
    console.log("empate");
  } else if (player == tijera && computer == piedra) {
    console.log("tu: " + player);
    console.log("computadora: " + computer);
    console.log("Punto para la computadora");
    puntajeComputer++;
    actaulizarResults();
  } else if (player == papel && computer == tijera) {
    console.log("tu: " + player);
    console.log("computadora: " + computer);
    console.log("Punto para la computadora");
    puntajeComputer++;
    actaulizarResults();
  } else if (player == piedra && computer == papel) {
    console.log("tu: " + player);
    console.log("computadora: " + computer);
    console.log("Punto para la computadora");
    puntajeComputer++
    actaulizarResults();
  } else if (player == piedra && computer == tijera) {
    console.log("tu: " + player);
    console.log("computadora: " + computer);
    console.log("Punto para ti");
    puntajePlayer++
    actaulizarResults();
  } else if (player == papel && computer == piedra) {
    console.log("tu: " + player);
    console.log("computadora: " + computer);
    console.log("Punto para ti");
    puntajePlayer++
    actaulizarResults();
  } else if (player == tijera && computer == papel) {
    console.log("tu: " + player);
    console.log("computadora: " + computer);
    console.log("Punto para ti");
    puntajePlayer++
    actaulizarResults();
  }
});

btnPapel.addEventListener("click", () => {
  player = papel
  computerPlay();

  if (player == computer) {
    console.log("tu: " + player);
    console.log("computer: " + computer);
    console.log("empate");
  } else if (player == tijera && computer == piedra) {
    console.log("tu: " + player);
    console.log("computadora: " + computer);
    console.log("Punto para la computadora");
    puntajeComputer++;
    actaulizarResults();
  } else if (player == papel && computer == tijera) {
    console.log("tu: " + player);
    console.log("computadora: " + computer);
    console.log("Punto para la computadora");
    puntajeComputer++;
    actaulizarResults();
  } else if (player == piedra && computer == papel) {
    console.log("tu: " + player);
    console.log("computadora: " + computer);
    console.log("Punto para la computadora");
    puntajeComputer++
    actaulizarResults();
  } else if (player == piedra && computer == tijera) {
    console.log("tu: " + player);
    console.log("computadora: " + computer);
    console.log("Punto para ti");
    puntajePlayer++
    actaulizarResults();
  } else if (player == papel && computer == piedra) {
    console.log("tu: " + player);
    console.log("computadora: " + computer);
    console.log("Punto para ti");
    puntajePlayer++
    actaulizarResults();
  } else if (player == tijera && computer == papel) {
    console.log("tu: " + player);
    console.log("computadora: " + computer);
    console.log("Punto para ti");
    puntajePlayer++
    actaulizarResults();
  }
});

btnTijera.addEventListener("click", () => {
  player = tijera
  computerPlay();

  if (player == computer) {
    console.log("tu: " + player);
    console.log("computer: " + computer);
    console.log("empate");
  } else if (player == tijera && computer == piedra) {
    console.log("tu: " + player);
    console.log("computadora: " + computer);
    console.log("Punto para la computadora");
    puntajeComputer++;
    actaulizarResults();
  } else if (player == papel && computer == tijera) {
    console.log("tu: " + player);
    console.log("computadora: " + computer);
    console.log("Punto para la computadora");
    puntajeComputer++;
    actaulizarResults();
  } else if (player == piedra && computer == papel) {
    console.log("tu: " + player);
    console.log("computadora: " + computer);
    console.log("Punto para la computadora");
    puntajeComputer++
    actaulizarResults();
  } else if (player == piedra && computer == tijera) {
    console.log("tu: " + player);
    console.log("computadora: " + computer);
    console.log("Punto para ti");
    puntajePlayer++
    actaulizarResults();
  } else if (player == papel && computer == piedra) {
    console.log("tu: " + player);
    console.log("computadora: " + computer);
    console.log("Punto para ti");
    puntajePlayer++
    actaulizarResults();
  } else if (player == tijera && computer == papel) {
    console.log("tu: " + player);
    console.log("computadora: " + computer);
    console.log("Punto para ti");
    puntajePlayer++
    actaulizarResults();
  }
});
