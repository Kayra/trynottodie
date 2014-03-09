/*jQuery.ajax({
	type: "GET",
	url : "https://raw.github.com/Kayra/trynottodie/master/Data/Food_Hygiene.json",
	dataType : "json",
	success : function(e){
		console.log(e);
		e = JSON.parse(e);
		extract(e);
	}, error: function(err){
		console.log(err);
	}
})*/

(function(){

	var spt = document.createElement('script');
		spt.src = 'https://gist.githubusercontent.com/RobbyCowell/9435502/raw/ab5d00330c432177325f52ad1ca604809875ddb0/food.js';
		spt.onload = function(){
			console.log(sean);
		};

	document.body.appendChild(spt);

})();

function extract (data) {

	//extract(sean.EstablishmentCollection);

	//Constants
	var json = data;
	var type = '"Food"';
	var mainS = '"false"';

	var rating;
	var lat;
	var lon;

	var length = data.length;

	document.body.innerHTML = "";

	for (var i =0; i < length; i += 1) {

		rating = data[i].RatingValue;
		lat = data[i].Geocode.Latitude;
		lon = data[i].Geocode.Longitude;

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