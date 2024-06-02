const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];

function addDataList(array, clase) {

    let ul = document.createElement('ul');
    ul.setAttribute('class', `${clase}`)
    let body = document.querySelector("body");
    body.appendChild(ul)

    array.forEach(thing => {
        let ul = document.querySelector(`.${clase}`)
        const li = document.createElement('li');
        let textNodeLi = document.createTextNode(thing);
        li.appendChild(textNodeLi);
        ul.appendChild(li);
    });

}

addDataList(apps, 'app');


