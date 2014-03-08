google.maps.visualRefresh = true;

var map;

function initialize() {
    var mapOptions = {
        zoom: 15,
        center: new google.maps.LatLng(50.718175, -1.876167),
        // mapTypeId: google.maps.MapTypeId.TERRAIN,
        disableDefaultUI: true
    };

    map = new google.maps.Map(document.getElementById('map_canvas'), mapOptions);
}