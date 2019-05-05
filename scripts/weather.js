// Tutorial: https://www.youtube.com/watch?v=wPElVpR1rwA
// Some things have been altered

window.addEventListener('load', () => {
    let long;
    let lat;
    let temperatureDegree = document.querySelector('.temperature-degree');

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            long = position.coords.longitude;
            lat = position.coords.latitude;

            const proxy = 'https://cors-anywhere.herokuapp.com/';
            const api = `${proxy}https://api.darksky.net/forecast/f738853fde6a67eda2bbb8846213a2ab/${lat},${long}`; //lat, long

            fetch(api) //Make call
                .then(response => {
                    return response.json();
                })
                .then(data => {
                    const { temperature} = data.currently;
                    //FORMULA FOR CELSIUS
                    let celsius = (temperature - 32) * (5 / 9);
                    // Set DOM elements to API
                    temperatureDegree.textContent = Math.floor(celsius) + "°C";

                })
        });
    }
});