(function(whoIsTheBoss) {

	console.log(whoIsTheBoss);
	
	// The GCD Algorithm...

	var a, b, gcd, i, r;

	// Just change 'a' and 'b' as you wish...
	a = 42, b = 30;

	while (b > 0) {
		r = a % b;
		a = b;
		b = r;
	}

	gcd = a;
	console.log('GCD is: ' + gcd); 

})('Function Arguments');