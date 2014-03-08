jQuery.ajax({
	type: "GET",
	url : "https://raw.github.com/Kayra/trynottodie/master/Data/Food_Hygiene.json",
	dataType : "text",
	success : function(e){
		console.log(e);
		e = JSON.parse(e);
		extract(e);
	}, error: function(err){
		console.log(err);
	}
})

function extract (data) {

	//Constants
	var json = JSON.parse(data);
	var type = '"Food"';
	var mainS = '"false"';

	var rating;
	var lat;
	var lon;

	var length = json["EstablishmentCollection"].length;

	for (var i =0; i < length; i ++) {

		rating = json.EstablishmentCollection[i].RatingValue;
		lat = json.EstablishmentCollection[i].["Geocode"].["Latitude"];
		lon = json.EstablishmentCollection[i].["Geocode"].["Longitude"];

		var jsonItem = new Object();

		jsonItem.id = i;
		jsonItem.type = type;
		jsonItem.mainS = mainS;
		jsonItem.rating = rating;
		jsonItem.lat = lat;
		jsonItem.lon = lon;

		console.log(
			'{' +
				'"type":' + '"Feature"' + ',' +
				'"geometry":' + '{' +
					'"type":' + '"Point"' + ',' +
					'"coordinates":' + '[' + lat + ',' + lon + ']' +
			'}' + ',' +

			'"properties":' + '{' +
					'"type":' + type + ',' +
					'"mainS"' + '"' + mainS +'"' +
					'"rating":' + '"' + rating + "" +
				'}' +
			'}'
		);
	}
}