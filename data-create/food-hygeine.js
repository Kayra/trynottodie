function extract (var data) {

	//Constants
	var json = JSON.parse(data);
	var type = "Food";
	var mainS = "false";

	var rating;
	var lat;
	var lon;

	var length = json["EstablishmentCollection"].length;

	for (var i =0; i < length; i ++) {

		rating = json["EstablishmentCollection"].RatingValue;
		lat = "";
		lon ="";
	}
}