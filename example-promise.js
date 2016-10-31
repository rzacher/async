
var weather = require('./weather.js');
var request = require('request');

var urlPre = 'http://api.openweathermap.org/data/2.5/weather?appid=0c95e6dabb3495ef6c80a76b5e8600bd&q='
var urlPost = '&units=imperial'
// function doWork (data, callback) {
// 	callback('done');
// }

// function doWorkPromise (data) {
// 	return new Promise(function (resolve, reject) {
// 		setTimeout( function() {
// 			reject('everything broken');
// 		}, 4000);
		
// 		// reject({
// 		// 	error: 'something bad happened'
// 		// });
// 	});
// }

// doWorkPromise('some data').then(function (data) {
// 	console.log(data);
// }, function (error) {
// 	console.log(error);
// });

function getWeather (location) {
	return new Promise(function (resolve, reject) {
		
		console.log('location=' + location);
		// move url here
	    var url = urlPre + encodeURIComponent(location) + urlPost;
		console.log('url = ' + url);

		if (!location) {
			reject('no location provided')
		}
		request({
		url: url,
		json: true
	  }, function(error, response, body) {
		if (error) {
			reject('unable to fetch weather');
		} else {
			//console.log(JSON.stringify(body, null, 4));
			var temp = body.main.temp;
			var loc = body.name;
			resolve("It's " + temp + ' in ' + loc );
		}
	  });
	});
}

getWeather('new york').then(function (currentWeather) {
	console.log(currentWeather);
}, function (error) {
    console.log(error);
});