const colors = ['rojo', 'azul', 'amarillo', 'verde', 'naranja'];

const copyColors = [...colors];

copyColors.splice(1, 1);

console.log(copyColors);