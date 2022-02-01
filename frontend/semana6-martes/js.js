let parrafo = document.querySelectorAll("p");
parrafo[0].style = "color: red; font-family: Arial; font-size: 40px";
parrafo[1].style = "color: red; font-family: Arial; font-size: 40px";
parrafo[2].style = "color: red; font-family: Arial; font-size: 40px";

let hrefparrafo = parrafo[0].querySelector("a");
hrefparrafo.href = "https://www.google.com";
hrefparrafo.textContent = "https://www.google.com";
hrefparrafo.style = "color: red";

