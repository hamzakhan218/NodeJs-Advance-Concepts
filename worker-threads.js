const Worker = require('webworker-threads').Worker;

app.get('/' , () => {
	const worker = new Worker(function (){
		this.onmessage = function (){
			let counter = 0;
			while(counter < 1e9){
				counter++;
			}
			postMessage(counter);
		}
	});
	worker.onmessage = function(myCounter){
		console.log(myCounter)
	}
	worker.postMessage();
})