let body = document.querySelector("body");

let selectDivs = document.querySelectorAll("div");

let p = document.createElement('p');
let pContent = document.createTextNode('Voy en medio!');
p.appendChild(pContent);

body.insertBefore(p, selectDivs[1]);