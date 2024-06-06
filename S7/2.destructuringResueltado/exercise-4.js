const car = {
    name: 'Mazda 6',
    itv: [2015, 2011, 2020]
};

let { name, itv } = car;

console.log(`Nombre del coche: ${name} Años de las ITV:  ${itv}`);

let [firstYear, secondYear, thirdYear] = itv;

console.log(`1º${firstYear}`);
console.log(`2º${secondYear}`);
console.log(`3º${thirdYear}`);
