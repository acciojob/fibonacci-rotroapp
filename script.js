function fibonacci(num) {
   let i=0;
	let j=1;
    while (num--) {
		
		i=j;
    	j=j+i;
		
    }

	return j;
}

module.exports = fibonacci;
