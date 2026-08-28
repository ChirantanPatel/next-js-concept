console.log("Location File Loaded")
function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(success, error);
    } else {
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
}

function success(position) {
    // x.innerHTML = "Latitude: " + position.coords.latitude +
    //     "<br>Longitude: " + position.coords.longitude;
        console.log(position);
}

function error() {
    alert("Sorry, no position available.");
}
getLocation();