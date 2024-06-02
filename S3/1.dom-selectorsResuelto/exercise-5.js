let dataset = document.querySelectorAll(`[data-function="testMe"]`);

dataset.forEach(data => {
    console.log(data.innerText);
});