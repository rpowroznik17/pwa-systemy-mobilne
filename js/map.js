navigator.geolocation.getCurrentPosition(position => {
    const { latitude, longitude } = position.coords;
    // Show a map centered at latitude / longitude.
    var mapOptions = {
        center: [latitude, longitude],
        zoom: 10
        }
        
        var map = new L.map('map', mapOptions);
        
        var layer = new L.TileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png');
        
        map.addLayer(layer);
});