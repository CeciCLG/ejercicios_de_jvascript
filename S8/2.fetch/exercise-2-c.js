const baseUrl = "https://api.nationalize.io?name=";

async function requestApi() {
    let input = document.querySelector("input");
    let inputContent = input.value;
    let api = await fetch(`https://api.nationalize.io?name=${inputContent}`);
    let data = await api.json();
    console.log(data);
    dinamicText(data);
    return data
}

function dinamicText(data) {

    let name = data.name;
    let idNum = data.count;
    let country = data.country;

    let div = document.createElement("div");
    div.setAttribute("id", `${idNum}`);

    let body = document.querySelector("body");
    let p = document.createElement("p");

    for (let i = 0; i < country.length; i++) {
        let pText = undefined;

        if (i === 0) {
            pText = document.createTextNode(`El nombre ${name} tiene un ${country[i].probability} porciento de ser de ${country[i].country_id}`);

        } else if (0 < i < country.length) {
            pText = document.createTextNode(` , un ${country[i].probability} porciento de ser de ${country[i].country_id}`);

        } else if (i === (country.length - 1)) {
            pText = document.createTextNode(` y un ${country[i].probability} porciento de ser de ${country[i].country_id}`);
        }
        console.log(pText);
        p.appendChild(pText);
    }

    div.appendChild(p);

    let button = document.createElement("button");
    let buttonText = document.createTextNode("X");
    button.setAttribute("class", `${idNum}`);
    button.appendChild(buttonText);

    button.addEventListener("click", () => {
        body.removeChild(div)
    })

    div.appendChild(button);
    body.appendChild(div);
}

let buttomElement = document.querySelector("button");
buttomElement.addEventListener("click", requestApi);