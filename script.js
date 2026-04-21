// CONTAGEM
const data = new Date("April 22, 2026 00:00:00").getTime();

setInterval(() => {
  const now = new Date().getTime();
  const diff = data - now;

  document.getElementById("dias").innerText = Math.floor(diff / (1000*60*60*24));
  document.getElementById("horas").innerText = Math.floor((diff/(1000*60*60))%24);
  document.getElementById("minutos").innerText = Math.floor((diff/(1000*60))%60);
  document.getElementById("segundos").innerText = Math.floor((diff/1000)%60);
}, 1000);


// SCROLL ANIMATION
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add("show");
    }
  });
});

document.querySelectorAll(".hidden").forEach(el => observer.observe(el));


// TEXTO DIGITANDO
const text = "Fala, eu sou o Luan 👋";
let i = 0;

function typing(){
  if(i < text.length){
    document.getElementById("typing").innerHTML += text.charAt(i);
    i++;
    setTimeout(typing, 50);
  }
}

typing();


// TOGGLE CARTA
function toggleCarta() {
  const carta = document.getElementById("cartaTexto");
  carta.classList.toggle("show");
}