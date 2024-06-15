const baseUrl = 'https://api.nationalize.io?name=';

function accessApi() {

}

function inputSelected(callback) {
    let input = document.querySelector("input");
    let inputContent = input.value;

}

function submitButton(callback) {
    let buttomElement = document.querySelector("button");
    buttomElement.addEventListener(SubmitEvent, callback)
}

