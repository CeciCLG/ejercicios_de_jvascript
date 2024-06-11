const streamers = [{
    name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'
}, {
    name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'
}, {
    name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'
}, {
    name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'
}];

function suscribeToEvents() {
    let inputElement = document.querySelector(`input`);
    inputElement.addEventListener('input', () => {
        let inputValue = document.querySelector(`[data-function=toFilterStreamers]`).value;
        let searched = streamers.filter((streamer) => {
            return streamer.name.indexOf(inputValue) >= 0;
        })
        console.log(searched);
    });
}

suscribeToEvents();