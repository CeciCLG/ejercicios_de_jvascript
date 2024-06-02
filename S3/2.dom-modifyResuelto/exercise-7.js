let body = document.querySelector("body");

let pClaseRemove = document.querySelectorAll(".fn-remove-me");

pClaseRemove.forEach(text => {
    body.removeChild(text);
});

