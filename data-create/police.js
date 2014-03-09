function extract (var data) {

	//Constants
	var json = JSON.parse(data);
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
	}
}