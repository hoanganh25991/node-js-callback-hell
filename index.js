let wait = require('wait.for-es6');

const LOOP_FOR = 10;

let count = 0;

let fs = require('fs');

function* test(){
	while(count < LOOP_FOR){
		// let exec = require('child_process').exec;
		// let cmd = `wget localhost:3000/package`;
		// let stdOut = yield [exec, cmd];
		yield [fs.readFile, 'type-form.mp4'];
		count++;
		console.log(count);
	}
}

wait.launchFiber(test); 