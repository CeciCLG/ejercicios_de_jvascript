let globalBasePrice = 10000;

const car1 = {
    name: 'BMW m&m',
    basePrice: 50000,
    finalPrice: 60000
};

const car2 = {
    name: 'Chevrolet Corbina',
    basePrice: 70000,
    finalPrice: 80000
};

console.log("Antes del cambio" + " car1: " + car1.finalPrice + " car2: " + car2.finalPrice);

globalBasePrice = 25000;

car1.finalPrice = car1.basePrice + globalBasePrice;

car2.finalPrice = car2.basePrice + globalBasePrice;

console.log("Despues del cambio" + " car1: " + car1.finalPrice + " car2: " + car2.finalPrice);