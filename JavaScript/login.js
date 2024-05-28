// behöver inte använda DOMcontentloaded event pga att scripten laddas in med defer attribut

const form = document.getElementById("login-form");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const username = form.children.item(1).children.item(1).value;
    const password = form.children.item(2).children.item(1).value;

    console.log(username, password);

    alert("Du Loggade In");
    sessionStorage.setItem("username", username);

    window.location.href="index.html"
})