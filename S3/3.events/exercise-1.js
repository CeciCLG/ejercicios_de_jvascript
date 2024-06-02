let body = document.querySelector('body');

let buttom = document.createElement('button');
buttom.setAttribute('class', 'btnToClick');
buttom.style.cssText = 'background-color: red; width: 250px; height: 100px';
let textButtom = document.createTextNode('Do not press');
buttom.appendChild(textButtom);
body.appendChild(buttom)

buttom.addEventListener("click", (e) => console.log(e));