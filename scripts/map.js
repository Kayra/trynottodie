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
    var s = document.getElementByTagName('script')[0];
    s.parentNode.insertBefore(script, s);

}