const LOOP_FOR = 10;
let count = 0;

let fs = require('fs');

while(count < LOOP_FOR){
	// let cmd = `wget localhost:3000/package`;
	// let exec = require('child_process').exec;
	// exec(cmd);
	fs.readFile('type-form.mp4', err => {
		console.log(count);
	});
	count++;
}