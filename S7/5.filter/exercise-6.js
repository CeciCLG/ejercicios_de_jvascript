const streamers = [{
    name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'
}, {
    name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'
}, {
    name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'
}, {
    name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'
}];

const streamesLol = streamers.filter((streamer) => {
    let streamerGame = streamer.gameMorePlayed;
    return streamerGame.includes('League');
})

for (let i = 0; i < streamesLol.length; i++) {
    if (streamesLol[i].age > 35) {
        streamesLol[i].name = streamesLol[i].name.toUpperCase();
    }
}

console.log(streamesLol);