google.maps.visualRefresh = true;

var map;

function initialize() {
    var mapOptions = {
        zoom: 15,
        center: new google.maps.LatLng(50.727928, -1.864728),
        disableDefaultUI: true
    };

    map = new google.maps.Map(document.getElementById('map_canvas'), mapOptions);

    var script = document.createElement('script');
    script.src = "https://gist.githubusercontent.com/RobbyCowell/9446741/raw/70807cd32a8734ac44175e6a290b5d906d37a649/food-to-map.js";
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(script, s); 
}

window.food_callback = function() {
    var heatMapData = [];
    for (var i = 0; i < results.length; i++) {
        var coords = results[i].geometry.coordinates;
        var latLng = new google.maps.LatLng(coords[1], coords[0]);
        var rating = results[i].properties.rating;
        var weightedLoc = {
            location: latLng,
            weight: Math.pow(2, rating)
        };
        heatmapData.push(weightedLoc);
    }
    var heatmap = new google.maps.visualization.HeatmapLayer({
        data: heatmapData,
        dissipating: false,
        map: map
    });
}