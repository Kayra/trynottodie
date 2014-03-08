function extract (var data) {

	//Constants
	var json = JSON.parse(data);
	var type = '"FStation"';
	var mainS = '"false"';

	var rating = 0;
	var lat;
	var lon;
	var xcoord;
	var ycoord;

	var length = json.length;

	for (var i =0; i < length; i ++) {

		if (json[i].["Sub_Building_Name"].indexOf("WESTBORNE") != -1) {
			mainS = true;
		}
		xcoord = json[i].["X"];
		ycoord = json[i].["Y"];

		lon = XtoLon(xcoord);
		lat = YtoLat(ycoord);
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