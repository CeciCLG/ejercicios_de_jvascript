const cities = [{ isVisited: true, name: 'Tokyo' }, { isVisited: false, name: 'Madagascar' }, { isVisited: true, name: 'Amsterdam' }, { isVisited: false, name: 'Seul' }];

let citiesList = [];

cities.map((city) => {
    if (city.isVisited) {
        citiesList.push(`${city.name} (Visitado)`)
    } else {
        citiesList.push(`${city.name}`)
    }
})

console.log(citiesList);