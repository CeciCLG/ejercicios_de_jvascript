let selectedDivs = document.querySelectorAll(".fn-insert-here");

console.log(selectedDivs);

function createP(content, parent) {
    let p = document.createElement("p");
    let pText = document.createTextNode(content);
    p.appendChild(pText);

    parent.appendChild(p)
}

selectedDivs.forEach(div => {
    createP("¡Voy dentro!", div)
});