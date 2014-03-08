google.maps.visualRefresh = true;

var map;

function initialize() {
    var mapOptions = {
        zoom: 15,
        center: new google.maps.LatLng(50.727928, -1.864728),
        disableDefaultUI: true
    };

    map = new google.maps.Map(document.getElementById('map_canvas'), mapOptions);
}