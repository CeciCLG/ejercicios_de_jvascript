
const users = [{
    id: 1, 
    name: 'Abel'},
{
    id:2,
    name: 'Julia'
},{
    id:3, 
    name: 'Pedro'
}, {
    id:4, 
    name: 'Amanda'}];

users.map((array) => { 
    let namesArray = [];
    for (let i = 0, i < array.length, i++) {
    namesArray.push(array[i].name);
    }
    return namesArray
});
