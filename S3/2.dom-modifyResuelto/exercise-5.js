function textH2ClassFnInsertHere() {
    let textH2 = document.createTextNode('Wubba Lubba dub dub');

    let h2 = document.querySelector('.fn-insert-here');
    h2.appendChild(textH2);
}

textH2ClassFnInsertHere();