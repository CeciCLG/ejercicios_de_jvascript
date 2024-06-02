let input

document.querySelector("[type=text]").addEventListener("focus", inputext);

function inputext(e) {
    console.log(e.target.value);
}