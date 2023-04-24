const imie = document.querySelector("#imie");
const nazwisko = document.querySelector("#nazwisko");
const klasa = document.querySelector("#klasa");
const rok_szkolny = document.querySelector("#rok_szkolny");
const firma = document.querySelector("#firma");
const data_rozpoczecia = document.querySelector("#data_rozpoczecia");
const data_zakonczenia = document.querySelector("#data_zakonczenia");
const przycisk_zatwierdz = document.querySelector("#zatwierdz");
const przycisk_edytuj = document.querySelector("#edit");
const form = document.querySelector("#formularz");
const button_panel = document.querySelector("#button_panel");
const display = document.querySelector("#display");

przycisk_zatwierdz.addEventListener("click", function (evt) {
  evt.preventDefault();

  if (
    imie.value == "" ||
    nazwisko.value == "" ||
    klasa.value == 0 ||
    rok_szkolny.value == "" ||
    firma.value == 0 ||
    data_rozpoczecia.value == "" ||
    data_zakonczenia == ""
  ) {
    alert("Wypełnij wszystkie pola!");
  } else {
    display.innerHTML = "";

    form.classList.toggle("hidden");
    display.classList.toggle("hidden");
    button_panel.classList.toggle("hidden");

    display.innerHTML += `Dane ucznia`;

    const dane = document.createElement("div");

    const imie_nazwisko_element = document.createElement("p");
    imie_nazwisko_element.innerHTML += `${imie.value} ${nazwisko.value}`;
    dane.append(imie_nazwisko_element);

    const klasa_element = document.createElement("p");
    klasa_element.innerHTML += `klasa ${klasa.value}`;
    dane.append(klasa_element);

    const rok_szkolny_element = document.createElement("p");
    rok_szkolny_element.innerHTML += `Rok szkolny ${rok_szkolny.value}`;
    dane.append(rok_szkolny_element);

    const firma_element = document.createElement("p");
    firma_element.innerHTML += `Odbytej w ${firma.value}`;
    dane.append(firma_element);

    const data_rozpoczecia_element = document.createElement("p");
    data_rozpoczecia_element.innerHTML += `Data rozpoczęcia: ${data_rozpoczecia.value}`;
    dane.append(data_rozpoczecia_element);

    const data_zakonczenia_element = document.createElement("p");
    data_zakonczenia_element.innerHTML += `Data zakończenia ${data_zakonczenia.value}`;
    dane.append(data_zakonczenia_element);

    display.appendChild(dane);
  }
});

przycisk_edytuj.addEventListener("click", function () {
  form.classList.toggle("hidden");
  display.classList.toggle("hidden");
  button_panel.classList.toggle("hidden");
});
