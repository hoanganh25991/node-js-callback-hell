const LOOP_FOR = 10;
let count = 0;

let fs = require('fs');

function test(a){
	console.log(a);
	let p1 = new Promise((resolve, reject) => {
		fs.readFile('type-form.mp4');
		count++;

		if(count >= LOOP_FOR){
			reject();
		}
		
		resolve(count);
	});
	p1.then(test);
}

test();
