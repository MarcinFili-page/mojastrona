function wszystkie() {
    zegar();
    setInterval(zegar, 1000);
    licznikOdwiedzin();
    liczCzasNaStronie();
}

// Zegar i data
function zegar() {
    const teraz = new Date();

    const godzina = String(teraz.getHours()).padStart(2, '0');
    const minuta = String(teraz.getMinutes()).padStart(2, '0');
    const sekunda = String(teraz.getSeconds()).padStart(2, '0');
    const czas = `${godzina}:${minuta}:${sekunda}`;

    const dni = ["Niedziela", "Poniedziałek", "Wtorek", "Środa", "Czwartek", "Piątek", "Sobota"];
    const miesiace = ["Stycznia", "Lutego", "Marca", "Kwietnia", "Maja", "Czerwca", "Lipca", "Sierpnia", "Września", "Października", "Listopada", "Grudnia"];

    const dzienTygodnia = dni[teraz.getDay()];
    const dzienMiesiaca = teraz.getDate();
    const miesiac = miesiace[teraz.getMonth()];
    const rok = teraz.getFullYear();

    const pelnaData = `${czas} ${dzienTygodnia}, ${dzienMiesiaca} ${miesiac} ${rok}`;
    const zegarDiv = document.getElementById('zegar');
    if (zegarDiv) zegarDiv.innerHTML = pelnaData;
}

// Licznik odwiedzin (zachowany między sesjami)
function licznikOdwiedzin() {
    const key = "licznik-odwiedzin";
    const lastVisit = localStorage.getItem("last-visit-date");
    const today = new Date().toDateString();

    if (lastVisit !== today) {
        let count = parseInt(localStorage.getItem(key)) || 0;
        count++;
        localStorage.setItem(key, count);
        localStorage.setItem("last-visit-date", today);
    }

    const licznikDiv = document.getElementById('licznik');
    if (licznikDiv) licznikDiv.innerHTML = "Liczba odwiedzin: " + localStorage.getItem(key);
}

// Czas spędzony na stronie (w obrębie jednej sesji)
function liczCzasNaStronie() {
    if (!sessionStorage.getItem("czas-start")) {
        sessionStorage.setItem("czas-start", Date.now());
    }

    setInterval(() => {
        const start = parseInt(sessionStorage.getItem("czas-start"));
        const teraz = Date.now();
        const roznicaSekundy = Math.floor((teraz - start) / 1000);

        const godziny = Math.floor(roznicaSekundy / 3600);
        const minuty = Math.floor((roznicaSekundy % 3600) / 60);
        const sekundy = roznicaSekundy % 60;

        const wynik = `${godziny}h ${minuty}m ${sekundy}s`;
        const czasDiv = document.getElementById("czas");
        if (czasDiv) czasDiv.innerHTML = "Czas spędzony na stronie: " + wynik;
    }, 1000);
}