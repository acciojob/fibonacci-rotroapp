function fibonacci(num) {
   let i=0;
	let sum=0;
	let j=1;
	if(num == 0)
	{
		return 0;
	}else if(num == 1 || num == 2)
	{
		return 1;
	}
    while (num-- > 2) {
		sum= i+j;
		i=j;
    	j=sum;
    }
	return sum;
}

module.exports = fibonacci;
