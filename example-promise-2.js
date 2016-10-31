/*function doWork (shouldFail) {
	return new Promise(function (resolve, reject) {
		setTimeout(function () {
			if (shouldFail === true) {
				reject('error message');
			} else {
				resolve('success');
			}
		}, 1000);
	});
}

doWork().then(function (message) {
	console.log(message);
	return doWork(true);
}).then(function (message) {
	console.log(message);

}).catch( function (error) {
	console.log(error);
});*/


function getLocation ( ) {
	return new Promise(function (resolve, reject) {
		resolve('boston');
	});
}

function getWeather(location) {
	return new Promise (function (resolve, reject) {
		resolve ('its 78 degrees');
	});
}

getLocation().then(function (location) {
		console.log('location is ' + location);
		return getWeather(location);
    }, function (error) {
		console.log('foobar');
}).then(function (message) {
	console.log(message);
});
   //return getWeather(location)
   //then
   //console.log(currentWeather)