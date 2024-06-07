
const users = [{
    id: 1,
    name: 'Abel'
},
{
    id: 2,
    name: 'Julia'
}, {
    id: 3,
    name: 'Pedro'
}, {
    id: 4,
    name: 'Amanda'
}];

let namesArray = [];

users.map((user) => {
    namesArray.push(user.name);
});

console.log(namesArray);