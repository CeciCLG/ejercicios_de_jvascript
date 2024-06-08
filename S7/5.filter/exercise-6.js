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
   return streamer.gameMorePlayed.includes(League); 
})

streamesLol = streamesLol.filter((streamer) => {
    streamer.age > 35
    return streamer.name.toUppercase
})
