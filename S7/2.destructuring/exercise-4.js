const car = {
    name: 'Mazda 6', 
    itv: [2015, 2011, 2020] 
};

let {carName, itvYears} = car;

console.log(`${carName} ${itvYears}`);

let {
    firstYear, 
    secondYear, 
    thirdYear} = itvYears;

console.log(`${firstYear} ${secondYear} ${thirdYear}`);
