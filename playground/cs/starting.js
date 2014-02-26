(function() {
	
	// The GCD Algorithm...

	var a, b, gcd, i, r;

	// Just change 'a' and 'b' as you wish...
	a = 289, b = 204;

	while (b > 0) {
		r = a % b;
		a = b;
		b = r;
	}

	gcd = a;
	console.log('GCD is: ' + gcd); 

})();