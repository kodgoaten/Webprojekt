const element = document.getElementById("box");
const knapp = document.getElementById("button");
element.style.display = "none"
knapp.addEventListener("click", function (e) {
  if (element.style.display === "none") {
    element.style.display = "block";
  } 
});
// Visar texten under när man trycker på knappen
