const loginButton = document.getElementById("login");
const loggedInText = document.getElementById("logged-in");

const username = sessionStorage.getItem("username");
if(username) {
    loginButton.classList.toggle("hidden");
    loggedInText.classList.toggle("hidden");

    loggedInText.innerText = loggedInText.innerText.replace("{username}", username);
}
// Koden här kollar ifall det finns ett username och om det finns så ger det loginButton("#login") klassen hidden och tar bort det från loggedinText(#logged-in) och sedan byter ut "{username}" med det username man satte in när man loggade in