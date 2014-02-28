'use strict';

/**
* Just me going through Speaking JavaScript...
*/

// Single Lines...
// What's the diff. between these two IIFE functions?

(function(one) {

	var fooObj, x, y;

	console.log(one);

	x = 20 + 3;

	function add(x, y) {
		console.log(x + y);
		// Where is this 'return' really going?
		// return x + y;
	}

	add(20, 3);

	fooObj = {
		name: 'Poplinr',
		sayMyName: function() {
			console.log('Hacker Name: ' + this.name);
		}
	};

	fooObj.sayMyName();

	if (x === 23) {
		console.log('JavaScript is the shit...');
	}

	// A Statement...
	if (y === undefined) {
		y = true;
	} else {
		y = false;
	}

	console.log(x, y);

	y = 23;
	console.log(y);

	// An Expression...
	// How to make it negate...
	x = y < 22 ? y : -y;
	console.log(x);

	

}('IIFE One...'));

(function(two) {

	console.log(two);

})('IIFE Two...');