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
	var type = '"FStation"';
	var mainS = '"false"';

	var rating = 0;
	var lat;
	var lon;
	var xcoord;
	var ycoord;

	var length = json.length;

	document.body.innerHTML = "";

	for (var i =0; i < length; i ++) {

		if (json[i].["Sub_Building_Name"].indexOf("WESTBORNE") != -1) {
			mainS = true;
		}
		xcoord = json[i].["X"];
		ycoord = json[i].["Y"];

		lon = XtoLon(xcoord);
		lat = YtoLat(ycoord);

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
	'}';

	}
}

function XtoLon (x) {
    return -180 + 0.0000006705522537 * x;
}

function YtoLat (y) 
{
    var e = 2.7182818284590452353602875;
    var a = 268435456;
    var b = 85445659.4471;
    var c = 0.017453292519943;

    return Math.asin(Math.pow(e,(2*a/b-2*y/b))/(Math.pow(e,(2*a/b-2*y/b))+1)-1/(Math.pow(e,(2*a/b-2*y/b))+1))/c;
}