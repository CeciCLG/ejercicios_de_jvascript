const baseUrl = 'https://api.nationalize.io?name=';

async function requestApi() {
    let input = document.querySelector("input");
    let inputContent = input.value;
    let api = await fetch(`https://api.nationalize.io?name=${inputContent}`);
    let data = await api.json();
    console.log(data);
    return data
}

let buttomElement = document.querySelector("button");
buttomElement.addEventListener('click', requestApi);
