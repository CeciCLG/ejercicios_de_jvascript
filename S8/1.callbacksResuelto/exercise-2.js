const userAnwsers = [];

let descriptionVar = "¿confirmas o cancelas?"

function confirmExample(description) {
    let confirmVar = confirm(description);
    return confirmVar
}

function promptExample(description) {
    let propmtVar = prompt(description, "");
    return propmtVar
}

function father(description, callback) {
    let callbackVar = callback(description);
    userAnwsers.push(callbackVar);
}

father(descriptionVar, confirmExample)
console.log(userAnwsers);

father(descriptionVar, promptExample)

console.log(userAnwsers);