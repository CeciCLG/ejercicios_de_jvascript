const alien = {
    name: 'Wormuck',
    race: 'Cucusumusu',
    planet: 'Eden',
    weight: '259kg'
}

for (const dato in alien) {
    if (Object.hasOwnProperty.call(alien, dato)) {
        console.log(dato + ": " + alien[dato]);
    }
}