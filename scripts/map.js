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
    script.src = "https://gist.githubusercontent.com/RobbyCowell/9446741/raw/aacf08130423752693cccaca62f3f91df0513da1/food-to-map.js";
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(script, s);     

    script.onload = function(){

        execute(data);
    }
}

function execute(results) {

    results = results[0].features;

    for (var i = 0; i < results.length; i++) { 

        var thisResult = results[i];

        if (thisResult != undefined && thisResult.geometry !== undefined && thisResult.geometry.coordinates != undefined) {

            console.log(thisResult);

            var coords = thisResult.geometry.coordinates;
            var latLng = new google.maps.LatLng(coords[0], coords[1]);
            var marker = new google.maps.Marker({
                position: latLng,
                map: map
            });
         }
    }
}

// function execute(results) {

//     var heatmapData = [];

//     results = results[0].features;

//     console.log(results[0].geometry);

//     for (var i = 0; i < results.length; i++) {

//         var thisResult = results[i];

//         if(thisResult != undefined && thisResult.geometry !== undefined && thisResult.geometry.coordinates != undefined){

//             console.log(thisResult);

//             var coords = thisResult.geometry.coordinates;
//             var latLng = new google.maps.LatLng(coords[0], coords[1]);
//             var rating = thisResult.properties.rating;
//             var weightedLoc = {
//                 location: latLng,
//                 weight: Math.pow(2, rating)
//             };
//             heatmapData.push(weightedLoc);
//         }

//     }

//     var heatmap = new google.maps.visualization.HeatmapLayer({
//         data: heatmapData,
//         dissipating: false,
//         map: map
//     });
// }