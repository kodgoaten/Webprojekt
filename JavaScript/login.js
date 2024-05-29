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

// den tar värdet man sätter in i formen och gör det till variabler username och password och sedan ger en alert vilket visar användaren att man loggat in. Den tar även ut namnet av username och sätter in det i sessionstorage så att det kommer ihåg det. Sen skickar den dig tillbaka till hemsidan.