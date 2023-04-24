const sprawozdanie = document.querySelector("#sprawozdanie");
const ocena_1 = document.querySelector("#ocena_1");
const ocena_2 = document.querySelector("#ocena_2");
const ocena_3 = document.querySelector("#ocena_3");
const ocena_4 = document.querySelector("#ocena_4");
const button_stworz_podsumowanie = document.querySelector(
  "#button_stworz_podsumowanie"
);
const display = document.querySelector("#display");

button_stworz_podsumowanie.addEventListener("click", function (evt) {
  evt.preventDefault();

  if (
    sprawozdanie.value == "" ||
    ocena_1.value == 0 ||
    ocena_2.value == 0 ||
    ocena_3.value == 0 ||
    ocena_4.value == 0
  ) {
    alert("Wypełnij wszystkie pola!");
  } else {
    display.innerHTML = "";

    const dane = document.createElement("div");
    dane.setAttribute("id", "div_podsumowanie")

    const podsumowanie_element = document.createElement("h2");
    podsumowanie_element.setAttribute("id", "podsumowanie_element");
    podsumowanie_element.innerHTML += `Podsumowanie`;
    dane.append(podsumowanie_element);

    const sprawozdanie_tytul_element = document.createElement("h2");
    sprawozdanie_tytul_element.setAttribute("id", "sprawozdanie_tytul");
    sprawozdanie_tytul_element.innerHTML += `Sprawozdanie`;
    dane.append(sprawozdanie_tytul_element);

    const sprawozdanie_element = document.createElement("p");
    sprawozdanie_element.setAttribute("id", "sprawozdanie_tekst");
    sprawozdanie_element.innerHTML += `${sprawozdanie.value}`;
    dane.append(sprawozdanie_element);

    const ocena_element = document.createElement("p");
    ocena_element.setAttribute("id", "ocena_element");

    let srednia_ocen;
    let ocena_1_value = parseInt(ocena_1.value);
    let ocena_2_value = parseInt(ocena_2.value);
    let ocena_3_value = parseInt(ocena_3.value);
    let ocena_4_value = parseInt(ocena_4.value);

    srednia_ocen =
      (ocena_1_value + ocena_2_value + ocena_3_value + ocena_4_value) / 4;

    let ocena_slowna;
    let ocena;

    //stwierdzenie oceny slownej po sredniej arytmetycznej i zaokrąglenie średniej do oceny
    if (srednia_ocen <= 1.69) {
      ocena_slowna = "niedostateczny";
      ocena = 1;
    } else if (srednia_ocen > 1.7 && srednia_ocen < 2.69) {
      ocena_slowna = "doposzczający";
      ocena = 2;
    } else if (srednia_ocen > 2.7 && srednia_ocen < 3.69) {
      ocena_slowna = "dostateczny";
      ocena = 3;
    } else if (srednia_ocen > 3.7 && srednia_ocen < 4.69) {
      ocena_slowna = "dobry";
      ocena = 4;
    } else if (srednia_ocen > 4.7 && srednia_ocen < 5.3) {
      ocena_slowna = "bardzo dobry";
      ocena = 5;
    } else if (srednia_ocen > 5.31) {
      ocena_slowna = "celujący";
      ocena = 6;
    }

    ocena_element.innerHTML += `Proponowana ocena: (${ocena}) ${ocena_slowna}`;
    dane.append(ocena_element);

    display.appendChild(dane);
  }
});
