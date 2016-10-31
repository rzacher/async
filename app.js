var weather = require('./weather.js');
var location = require('./location.js')

/*location(function (location) {
	if (!location) {
		console.log('unable to guess location');
		return;
	}
	console.log('city ' + location.city);
	console.log('long/lat ' + location.loc);
	weather(location.city, function (currentWeather) {
		console.log(currentWeather);
	});

});
*/

location().then(function (location) {
		console.log('location is ');
		console.log(location);
		return weather(location.city);
    }, function (error) {
		console.log('foobar');
}).then(function (currentWeather) {
	console.log(currentWeather);
}).catch(function (error) {
	console.log(error);
});


