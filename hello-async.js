
// setTimeout(function () {
// 	console.log('1');
// }, 2000);

// setTimeout(function () {
// 	console.log('3');
// }, 1000);

// console.log('2');

console.log('challenge');

function printin2seconds(message) {
	setTimeout(function() {
		console.log(message);
	}, 4000);
}

printin2seconds("hello async");