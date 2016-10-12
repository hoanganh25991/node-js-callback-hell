const LOOP_FOR = 10;

let count = 0;

let em = {
	listeners: [],
	add(l){
		this.listeners.push(l);
	},
	fire(event){
		let listenersOnEvent = this.listeners.filter(l => {return l.event == event;});
		listenersOnEvent.forEach(l => {l.exec();});
	}
};

let fs = require('fs');

em.add({
	event: 'finished',
	exec(){
		// let exec = require('child_process').exec;
		// let cmd = `wget localhost:3000/package`;
		
		// exec(cmd, err =>{
		// 	count++;
		// 	if(count < LOOP_FOR)
		// 		em.fire('finished');
		// });
		fs.readFile('type-form.mp4', err => {
			count++;
			console.log(count);
			if(count < LOOP_FOR)
				em.fire('finished');
		});
	}
});

em.fire('finished');