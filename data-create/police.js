(function(){

	var spt = document.createElement('script');
		spt.src = 'https://gist.githubusercontent.com/RobbyCowell/9435502/raw/ab5d00330c432177325f52ad1ca604809875ddb0/food.js';
		spt.onload = function(){
			console.log(sean);
		};

	document.body.appendChild(spt);

})();


function extract (data) {

	//Constants
	var json = data;
	var type = "Police";
	var mainS = "false";

	var rating = 0;
	var lat;
	var lon;

	var length = json.length;

	for (var i =0; i < length; i ++) {

		if (json[i].["Crime type"].indexOf("Other theft") != -1) {
			rating = 1;
		}
		else if (json[i].["Crime type"].indexOf("Anti-social behaviour") != -1  || json[i].["Crime type"].indexOf("Shoplifting") != -1) {
			rating = 2;
		}
		else if (json[i].["Crime type"].indexOf("Burglary") != -1) {
			rating = 3;
		}
		else if (json[i].["Crime type"].indexOf("Vehicle crime") != -1 || json[i].["Crime type"].indexOf("Criminal damage and arson") != -1 || json[i].["Crime type"].indexOf("Violent crime") != -1) {
			rating = 4;
		}
		else if (json[i].["Crime type"].indexOf("Public disorder and weapons") != -1) {
			rating = 5;
		}
		else {
			rating = 3;
		}

		lon = json[i].["Longitude"];
		lat = json[i].["Latitude"];

		var jsonItem = new Object();

		jsonItem.id = i;
		jsonItem.type = type;
		jsonItem.mainS = mainS;
		jsonItem.rating = rating;
		jsonItem.lat = lat;
		jsonItem.lon = lon;

		document.body.innerHTML += '{' +
				'"type":' + '"Feature"' + ',' +
				'"geometry":' + '{' +
					'"type":' + '"Point"' + ',' +
					'"coordinates":' + '[' + lat + ',' + lon + ']' +
			'}' + ',' +

			'"properties":' + '{' +
					'"type":' + type + ',' +
					'"mainS":' + mainS + ',' +
					'"rating":' + '"' + rating + '"' +
				'}' +
			'}' + ',';

	}
}