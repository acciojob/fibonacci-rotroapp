function fibonacci(num) {
   let i=0;
	let sum=0;
	let j=1;
    while (num-- > 1) {
		sum= i+j;
		i=j;
    	j=sum;
    }
	return sum;
}

module.exports = fibonacci;
