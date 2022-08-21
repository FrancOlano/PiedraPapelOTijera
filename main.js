var piedra = "✊";
var papel = "✋";
var tijera = "✌";
let arr = [piedra, papel, tijera]
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
  let elegir = Math.floor(Math.random() * arr.length);
  if(elegir === 0){
    computer = piedra
  }
  else if (elegir === 1){
    computer = papel
  }
  else if (elegir === 2){
    computer = tijera
  }
  
  
};




btnPiedra.addEventListener("click", () => {
  player = piedra
  computerPlay();

  if (player == computer) {

    jugada.innerHTML = piedra + " vs " + piedra;

  } else if (player == tijera && computer == piedra) {

    jugada.innerHTML = tijera + " vs " + piedra;
    puntajeComputer++;
    actaulizarResults();

  } else if (player == papel && computer == tijera) {

    jugada.innerHTML = papel + " vs " + tijera;
    puntajeComputer++;
    actaulizarResults();

  } else if (player == piedra && computer == papel) {

    jugada.innerHTML = piedra + " vs " + papel;
    puntajeComputer++
    actaulizarResults();

  } else if (player == piedra && computer == tijera) {

    jugada.innerHTML = piedra + " vs " + tijera;
    puntajePlayer++
    actaulizarResults();
    
  } else if (player == papel && computer == piedra) {

    jugada.innerHTML = papel + " vs " + piedra;
    puntajePlayer++
    actaulizarResults();

  } else if (player == tijera && computer == papel) {
    
    jugada.innerHTML = tijera + " vs " + papel;
    puntajePlayer++
    actaulizarResults();
  }
});

btnPapel.addEventListener("click", () => {
  player = papel
  computerPlay();

  if (player == computer) {

    jugada.innerHTML = papel + " vs " + papel;

  } else if (player == tijera && computer == piedra) {

    jugada.innerHTML = tijera + " vs " + piedra;
    puntajeComputer++;
    actaulizarResults();

  } else if (player == papel && computer == tijera) {

    jugada.innerHTML = papel + " vs " + tijera;
    puntajeComputer++;
    actaulizarResults();

  } else if (player == piedra && computer == papel) {

    jugada.innerHTML = piedra + " vs " + papel;
    puntajeComputer++
    actaulizarResults();

  } else if (player == piedra && computer == tijera) {

    jugada.innerHTML = piedra + " vs " + tijera;
    puntajePlayer++
    actaulizarResults();
    
  } else if (player == papel && computer == piedra) {

    jugada.innerHTML = papel + " vs " + piedra;
    puntajePlayer++
    actaulizarResults();

  } else if (player == tijera && computer == papel) {
    
    jugada.innerHTML = tijera + " vs " + papel;
    puntajePlayer++
    actaulizarResults();
  }
  
});

btnTijera.addEventListener("click", () => {
  player = tijera
  computerPlay();

  if (player == computer) {

    jugada.innerHTML = tijera + " vs " + tijera;

  } else if (player == tijera && computer == piedra) {

    jugada.innerHTML = tijera + " vs " + piedra;
    puntajeComputer++;
    actaulizarResults();

  } else if (player == papel && computer == tijera) {

    jugada.innerHTML = papel + " vs " + tijera;
    puntajeComputer++;
    actaulizarResults();

  } else if (player == piedra && computer == papel) {

    jugada.innerHTML = piedra + " vs " + papel;
    puntajeComputer++
    actaulizarResults();

  } else if (player == piedra && computer == tijera) {

    jugada.innerHTML = piedra + " vs " + tijera;
    puntajePlayer++
    actaulizarResults();
    
  } else if (player == papel && computer == piedra) {

    jugada.innerHTML = papel + " vs " + piedra;
    puntajePlayer++
    actaulizarResults();

  } else if (player == tijera && computer == papel) {
    
    jugada.innerHTML = tijera + " vs " + papel;
    puntajePlayer++
    actaulizarResults();
  }
});
