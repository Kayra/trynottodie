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

		if (json[i].[""].indexOf("") != -1) {
			rating = 1;
		}
		if (json[i].[""].indexOf("") != -1) {
			rating = 2;
		}
		if (json[i].[""].indexOf("") != -1) {
			rating = 3;
		}
		if (json[i].[""].indexOf("") != -1) {
			rating = 4;
		}
		if (json[i].[""].indexOf("") != -1) {
			rating = 5;
		}
		xcoord = json[i].["Longitude"];
		ycoord = json[i].["Latitude"];
		
		lon = XtoLon(xcoord);
		lat = YtoLat(ycoord);
	}
}