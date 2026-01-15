let canciones = [];
let currentIndex = 0;
let historyIndex = 0;

fetch("./canciones.json")
  .then(res => res.json())
  .then(data => {
    canciones = data;

    const hoy = new Date();
    const hoyStr = hoy.toISOString().split("T")[0];

    currentIndex = canciones.findIndex(c => c.fecha === hoyStr);
    historyIndex = currentIndex - 1;

    if (currentIndex === -1) return;

    const c = canciones[currentIndex];

    // días juntos
    const inicio = new Date("2025-12-07");
    const daysTogether = Math.floor(
      (hoy.getTime() - inicio.getTime()) / (1000 * 60 * 60 * 24)
    );

    // render principal
    document.getElementById("letra").innerText = c.lyric;
    document.getElementById("spotify_name").innerText = c.name;
    document.getElementById("spotify_artist").innerText = c.artist;
    document.getElementById("spotify_img").src = c.image;
    document.getElementById("spotify_card").href = c.url;
    document.getElementById("fecha").innerText = c.fecha;
    document.getElementById("daysTogether").innerText = daysTogether;

    renderHistory();
  })
  .catch(err => console.error(err));

const openCointainer = document.getElementById("openCointainer");
const container = document.querySelector(".container");
const background = document.body;

openCointainer.addEventListener("click", () => {
  container.classList.remove("open");
  void container.offsetWidth;
  container.classList.add("open");
  background.classList.toggle("open");
});

document.getElementById("prev").addEventListener("click", () => {
  if (historyIndex > 0) {
    historyIndex--;
     }
  else historyIndex = currentIndex - 1;
  renderHistory();
 
});

document.getElementById("next").addEventListener("click", () => {
  if (historyIndex < currentIndex - 1) {
    historyIndex++;
  }
  else historyIndex = 0;
  renderHistory();
});

function renderHistory() {
  if (historyIndex < 0) return;

  const c = canciones[historyIndex];

  document.getElementById("history-date").innerText = c.fecha;
  document.getElementById("history-lyric").innerText = c.lyric;
  document.getElementById("history-img").src = c.image;
  document.getElementById("history-song").innerText = c.name;
  document.getElementById("history-artist").innerText = c.artist;
  document.getElementById("history-card").href = c.url;
}




