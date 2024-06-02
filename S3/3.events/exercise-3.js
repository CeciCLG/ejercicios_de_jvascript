document.querySelector("[type=text]").addEventListener("input", functionType);

function functionType(e) {
    console.log(e.target.value);
}