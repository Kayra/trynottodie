(function(){

	var spt = document.createElement('script');
		spt.src = 'https://gist.githubusercontent.com/Kayra/9447881/raw/01a8808563e9f69745778a39b149e01dfbeb93cb/police-data.json';
		spt.onload = function(){
			alert("Hit");
			console.log(daPolice);
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

		if (json[i]["Crime type"].indexOf("Other theft") != -1) {
			rating = 1;
		}
		else if (json[i]["Crime type"].indexOf("Anti-social behaviour") != -1  || json[i]["Crime type"].indexOf("Shoplifting") != -1) {
			rating = 2;
		}
		else if (json[i]["Crime type"].indexOf("Burglary") != -1) {
			rating = 3;
		}
		else if (json[i]["Crime type"].indexOf("Vehicle crime") != -1 || json[i]["Crime type"].indexOf("Criminal damage and arson") != -1 || json[i]["Crime type"].indexOf("Violent crime") != -1) {
			rating = 4;
		}
		else if (json[i]["Crime type"].indexOf("Public disorder and weapons") != -1) {
			rating = 5;
		}
		else {
			rating = 3;
		}

		lon = json[i]["Longitude"];
		lat = json[i]["Latitude"];

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