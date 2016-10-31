var request = require('request');
//var url = 'http://api.openweathermap.org/data/2.5/weather?appid=0c95e6dabb3495ef6c80a76b5e8600bd&q=%27%20+%20boston%20+%20%27&units=imperial'
var urlPre = 'http://api.openweathermap.org/data/2.5/weather?appid=0c95e6dabb3495ef6c80a76b5e8600bd&q='
var urlPost = '&units=imperial'

module.exports = function (location) {
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