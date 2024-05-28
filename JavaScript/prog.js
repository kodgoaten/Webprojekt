const element = document.getElementById("ruta");
const knapp = document.getElementById("knapp");
element.style.display = "none"
knapp.addEventListener("click", function (e) {
  if (element.style.display === "none") {
    element.style.display = "block";
  } 
});

document.getElementById("myForm").submit();