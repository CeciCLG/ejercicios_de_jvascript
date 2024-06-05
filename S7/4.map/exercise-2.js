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


let userName = [];

for (let i = 0, i < users.length, i++) {
    if (users.name.uppercase.chartAt(0) === 'A'){
        userName.push('Anacleto');
    }else {
        userName.push(users.name);
    }
}
