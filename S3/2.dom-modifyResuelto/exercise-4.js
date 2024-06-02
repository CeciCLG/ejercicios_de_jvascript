function addP(text) {
    let p = document.createElement('p')
    let pContent = document.createTextNode(text);
    p.appendChild(pContent);

    let body = document.querySelector('body');
    body.appendChild(p);
}

addP('¡Soy dinámico!');