var piedra = "✊";
var papel = "✋";
var tijera = "✌";

let btnPiedra = document.getElementById("piedra");
let btnPapel = document.getElementById("papel");
let btnTijera = document.getElementById("tijera");
let player;
let computer;
let refresh = document.getElementById("refresh");

let puntajeComputer = 0;
let puntajePlayer = 0;
let results = document.getElementById("results");
let jugada = document.getElementById("jugada");


refresh.addEventListener('click', ()=>{
  window.location.reload();
})


function actaulizarResults() {
  if (puntajeComputer >= 3) {
    
    results.innerHTML =
    "Gana la Computadora";
    refresh.style.display = "inline"
    btnPapel.disabled = true
    btnPiedra.disabled = true
    btnTijera.disabled = true


  }else if(puntajePlayer >= 3){
    
    results.innerHTML =
    "Ganaste 🎉";
    refresh.style.display = "inline"
    btnPapel.disabled = true
    btnPiedra.disabled = true
    btnTijera.disabled = true
  } else {
    results.innerHTML =
    "Tu: " + puntajePlayer+ "  " + "Computadora: " + puntajeComputer ;
    refresh.style.display = "none"
  }
  
}
actaulizarResults();

const computerPlay = () => {
  let num =
    Math.round(Math.random()) +
    Math.round(Math.random()) +
    Math.round(Math.random()) +
    Math.round(Math.random()) +
    Math.round(Math.random());

  if (num === 0 || num === 1) {
    computer = tijera;
  } else if (num === 2 || num === 3) {
    computer = piedra;
  } else if (num === 4 || num ===5) {
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
    jugada.innerHTML = piedra + " vs " + piedra;
  } else if (player == tijera && computer == piedra) {
    console.log("tu: " + player);
    console.log("computadora: " + computer);
    console.log("Punto para la computadora");
    jugada.innerHTML = tijera + " vs " + piedra;
    puntajeComputer++;
    actaulizarResults();
  } else if (player == papel && computer == tijera) {
    console.log("tu: " + player);
    console.log("computadora: " + computer);
    console.log("Punto para la computadora");
    jugada.innerHTML = papel + " vs " + tijera;
    puntajeComputer++;
    actaulizarResults();
  } else if (player == piedra && computer == papel) {
    console.log("tu: " + player);
    console.log("computadora: " + computer);
    console.log("Punto para la computadora");
    jugada.innerHTML = piedra + " vs " + papel;
    puntajeComputer++
    actaulizarResults();
  } else if (player == piedra && computer == tijera) {
    console.log("tu: " + player);
    console.log("computadora: " + computer);
    console.log("Punto para ti");
    jugada.innerHTML = piedra + " vs " + tijera;
    puntajePlayer++
    actaulizarResults();
  } else if (player == papel && computer == piedra) {
    console.log("tu: " + player);
    console.log("computadora: " + computer);
    console.log("Punto para ti");
    jugada.innerHTML = papel + " vs " + piedra;
    puntajePlayer++
    actaulizarResults();
  } else if (player == tijera && computer == papel) {
    console.log("tu: " + player);
    console.log("computadora: " + computer);
    console.log("Punto para ti");
    jugada.innerHTML = tijera + " vs " + papel;
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
    jugada.innerHTML = papel + " vs " + papel;
  } else if (player == tijera && computer == piedra) {
    console.log("tu: " + player);
    console.log("computadora: " + computer);
    console.log("Punto para la computadora");
    jugada.innerHTML = tijera + " vs " + piedra;
    puntajeComputer++;
    actaulizarResults();
  } else if (player == papel && computer == tijera) {
    console.log("tu: " + player);
    console.log("computadora: " + computer);
    console.log("Punto para la computadora");
    jugada.innerHTML = papel + " vs " + tijera;
    puntajeComputer++;
    actaulizarResults();
  } else if (player == piedra && computer == papel) {
    console.log("tu: " + player);
    console.log("computadora: " + computer);
    console.log("Punto para la computadora");
    jugada.innerHTML = piedra + " vs " + papel;
    puntajeComputer++
    actaulizarResults();
  } else if (player == piedra && computer == tijera) {
    console.log("tu: " + player);
    console.log("computadora: " + computer);
    console.log("Punto para ti");
    jugada.innerHTML = piedra + " vs " + tijera;
    puntajePlayer++
    actaulizarResults();
  } else if (player == papel && computer == piedra) {
    console.log("tu: " + player);
    console.log("computadora: " + computer);
    console.log("Punto para ti");
    jugada.innerHTML = papel + " vs " + piedra;
    puntajePlayer++
    actaulizarResults();
  } else if (player == tijera && computer == papel) {
    console.log("tu: " + player);
    console.log("computadora: " + computer);
    console.log("Punto para ti");
    jugada.innerHTML = tijera + " vs " + papel;
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
    jugada.innerHTML = tijera + " vs " + tijera;
  } else if (player == tijera && computer == piedra) {
    console.log("tu: " + player);
    console.log("computadora: " + computer);
    console.log("Punto para la computadora");
    jugada.innerHTML = tijera + " vs " + piedra;
    puntajeComputer++;
    actaulizarResults();
  } else if (player == papel && computer == tijera) {
    console.log("tu: " + player);
    console.log("computadora: " + computer);
    console.log("Punto para la computadora");
    jugada.innerHTML = papel + " vs " + tijera;
    puntajeComputer++;
    actaulizarResults();
  } else if (player == piedra && computer == papel) {
    console.log("tu: " + player);
    console.log("computadora: " + computer);
    console.log("Punto para la computadora");
    jugada.innerHTML = piedra + " vs " + papel;
    puntajeComputer++
    actaulizarResults();
  } else if (player == piedra && computer == tijera) {
    console.log("tu: " + player);
    console.log("computadora: " + computer);
    console.log("Punto para ti");
    jugada.innerHTML = piedra + " vs " + tijera;
    puntajePlayer++
    actaulizarResults();
  } else if (player == papel && computer == piedra) {
    console.log("tu: " + player);
    console.log("computadora: " + computer);
    console.log("Punto para ti");
    jugada.innerHTML = papel + " vs " + piedra;
    puntajePlayer++
    actaulizarResults();
  } else if (player == tijera && computer == papel) {
    console.log("tu: " + player);
    console.log("computadora: " + computer);
    console.log("Punto para ti");
    jugada.innerHTML = tijera + " vs " + papel;
    puntajePlayer++
    actaulizarResults();
  }
});
