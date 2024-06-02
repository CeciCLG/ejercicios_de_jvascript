function addDivP(numOfP) {
    let div = document.createElement('div');

    for (let i = 1; i <= numOfP; i++) {
        let p = document.createElement('p');
        div.appendChild(p);
    }

    let body = document.querySelector('body');
    body.appendChild(div);
}

addDivP(6);