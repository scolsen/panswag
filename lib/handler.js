//handler.js -- process user input and files.
const fs = require('fs');
const readline = require('readline');
const patchbay = require('./patchbay').patchbay;

function parseArgs(cmd){
	let cmdarr;
	if(Array.isArray(cmd) !== true){
		cmdarr = cmd.split(' ');
	} else {
		cmdarr = cmd;
	}
	let c = cmdarr[0];
	let opts = cmdarr.slice(1, cmdarr.length);
	if(patchbay.hasOwnProperty(c)){
		patchbay[c](opts);
	} else if (c === 'exit' || c === 'Exit' || c === 'quit' || c === 'Quit'){
		console.log("Exiting");
		process.exit(0);
	} else {
		console.log("Unrecognized command: " + c);
	}	
}

function interactive(){
	const mrl = readline.createInterface({
		input: process.stdin,
		output: process.stdout,
		prompt: '[panswag] '
	  });

	  mrl.prompt();

	  mrl.on('line', (l)=>{
	    let lclean = l.replace(/\s{2,}/g, ' ');
	    parseArgs(lclean.trim());
	    mrl.prompt();
	  });
}

function main(args){
	if(args.length <= 2){
	  interactive();  
	} else {
		let ar = args.slice(2, args.length);
         	parseArgs(ar); 
	}	
}

exports.handle = main;
