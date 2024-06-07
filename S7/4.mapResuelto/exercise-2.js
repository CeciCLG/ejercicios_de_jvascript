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


console.log(users[0].name.charAt(0));

let userNames = [];

users.map((user) => {
    let upperUser = user.name;
    if (upperUser.charAt(0) === 'A') {
        return userNames.push('Anacleto');
    } else {
        return userNames.push(user.name);
    }
});


console.log(userNames);