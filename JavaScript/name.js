const loginButton = document.getElementById("login");
const loggedInText = document.getElementById("logged-in");

const username = sessionStorage.getItem("username");
if(username) {
    loginButton.classList.toggle("hidden");
    loggedInText.classList.toggle("hidden");

    loggedInText.innerText = loggedInText.innerText.replace("{username}", username);
}