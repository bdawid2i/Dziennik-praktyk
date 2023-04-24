const data_zajec = document.querySelector("#data_zajec");
const temat = document.querySelector("#dzial");
const opiekun = document.querySelectorAll(`[name="opiekun"]`);
const sprawozdanie = document.querySelector("#sprawozdanie");
const zrealizowano = document.querySelector("#zrealizowano");
const ilosc_godzin = document.querySelector("#ilosc_godzin");
const stopien = document.querySelector("#stopien");
const button_wyczysc_formularz = document.querySelector("#wyczysc_formularz");
const button_wyczysc_wpisy = document.querySelector(
  "#wyczysc_wpisy"
);
const button_dodaj = document.querySelector("#dodaj");
const licznik_display = document.querySelector("#licznik_display");
const display = document.querySelector("#display");

let licznik_wartosc = 150;
let numer_wpisu = 0;

const licznik_element = document.createElement("p");
licznik_element.innerHTML += `Pozostało ${licznik_wartosc} godzin`;
licznik_element.style.color = "#fcb233";
licznik_display.appendChild(licznik_element);



button_dodaj.addEventListener("click", function (evt) {
  evt.preventDefault();



  if(data_zajec.value == "" || temat.value == "" || sprawozdanie.value == "" || ilosc_godzin.value == 0)
  {
    alert("Wypełnij wszystkie pola!");
  }
  else
  {
  numer_wpisu++;

  const dane = document.createElement("div");

  const temat_element = document.createElement("p");
  temat_element.innerHTML += `temat: ${temat.value}`;
  dane.append(temat_element);

  const opiekun_element = document.createElement("p");
  let opiekun_wartosc = "";

  for (let i = 0; i < opiekun.length; i++) {
    if (opiekun[i].checked) {
      opiekun_wartosc = opiekun[i].value;
    }
  }
  opiekun_element.innerHTML = `opiekun: ${opiekun_wartosc}`;
  dane.append(opiekun_element);

  const data_zajec_ilosc_godzin_element = document.createElement("p");
  data_zajec_ilosc_godzin_element.innerHTML += `data realizacji: ${data_zajec.value} ilość godzin: ${ilosc_godzin.value}`;
  dane.append(data_zajec_ilosc_godzin_element);

  const zrealizowano_stopien_element = document.createElement("p");
  let zrealizowano_wartosc;

  if (zrealizowano.checked) {
    zrealizowano_wartosc = "tak";
    zrealizowano_stopien_element.innerHTML += `zrealizowano: ${zrealizowano_wartosc} ocena: ${stopien.value}`;
  } else {
    zrealizowano_wartosc = "nie";
    zrealizowano_stopien_element.innerHTML += `zrealizowano: ${zrealizowano_wartosc} ocena: ${stopien.value}`;
  }

  dane.append(zrealizowano_stopien_element);

  const sprawozdanie_element = document.createElement("p");
  sprawozdanie_element.innerHTML += `sprawozdanie: ${sprawozdanie.value}`;
  dane.append(sprawozdanie_element);


  display.appendChild(dane);
 

  if (licznik_wartosc > 0) {
    licznik_display.innerHTML = "";

    licznik_wartosc -= ilosc_godzin.value;

    if(licznik_wartosc<0)
    {
      licznik_element.innerHTML = `Pozostało 0 godzin`;
    }
    else
    {
      licznik_element.innerHTML = `Pozostało ${licznik_wartosc} godzin`;
    }
    
    licznik_element.style.color = "#fcb233";
    licznik_display.appendChild(licznik_element);
  } else {
    alert("Brak godzin!");
  }
}
});

button_wyczysc_formularz.addEventListener("click", function () {
  data_zajec.value = "";
  temat.value = "";
  sprawozdanie.value = "";
  ilosc_godzin.value = "";
  alert("Wyczyszczono dane w formularzu");
});

button_wyczysc_wpisy.addEventListener("click", function () {
  display.innerHTML = "";

  numer_wpisu = 0;

  licznik_wartosc = 150;

  licznik_element.innerHTML = `Pozostało ${licznik_wartosc} godzin`;
  licznik_element.style.color = "#fcb233";
  licznik_display.appendChild(licznik_element);

  alert("Wyczyszczono wszystkie wpisy");
});