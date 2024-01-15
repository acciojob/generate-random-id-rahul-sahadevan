function makeid(l) {
	let s = '';
	const alpha = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890'

	for(let i =0;i<l;i++){
		const random = Math.floor(Math.random() * alpha.length)
		s += alpha[random]
	}

	return s;


	
  // write your code here
}

// Do not change the code below.
const l = prompt("Enter a number.");
alert(makeid(l));
