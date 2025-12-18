
fetch("canciones.json")
  .then(res => res.json())
  .then(canciones => {
    const hoy = new Date();
    const hoyStr = hoy.toISOString().split("T")[0];
    const c = canciones.find(x => x.fecha === hoyStr);
    const inicio = new Date("2025-12-07"); // AAAA-MM-DD
    const daysTogether = hoy.getTime() - inicio.getTime();
    const daysTogetherStr = Math.floor(daysTogether / (1000 * 60 * 60 * 24));

    document.getElementById("letra").innerText = c.lyric;
    document.getElementById("spotify_name").innerText = c.name;
    document.getElementById("spotify_artist").innerText = c.artist;
    document.getElementById("spotify_img").src = c.image;
    document.getElementById("spotify_card").href = c.url;
    document.getElementById("fecha").innerText = c.fecha;
    document.getElementById("daysTogether").innerText = daysTogetherStr;
  })
  .catch(err => console.error("Error cargando canciones:", err));




const openCointainer = document.getElementById("openCointainer");
const container = document.querySelector(".container");
const background = document.querySelector("body");
openCointainer.addEventListener("click", () => {
   container.classList.remove("open");
  void container.offsetWidth; // truco para resetear la animación
  container.classList.add("open");
  background.classList.toggle("open");
});

