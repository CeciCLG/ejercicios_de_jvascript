async function apiCall() {
    try {
        let apiAgify = await fetch("https://api.agify.io?name=michael");
        let data = await apiAgify.json();
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}

apiCall()