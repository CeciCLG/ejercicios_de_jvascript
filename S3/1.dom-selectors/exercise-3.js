let testP = document.querySelectorAll(`p`);


console.log(testP);

for (let i = 0; i < testP.length; i++) {
    console.log(testP[i].outerText);
}