const element = document.getElementById("ruta");
const knapp = document.getElementById("knapp");

knapp.addEventListener("click", function (e) {
  if (element.style.display === "none") {
    element.style.display = "block";
  } else {
    element.style.display = "none";
  }
});