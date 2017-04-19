//handler.js -- process user input and files.
const fs = require('fs');
const readline = require('readline');
const patchbay = require('./patchbay').patchbay;

function parseArgs(cmd){
	if(patchbay.hasOwnProperty(cmd)){
		patchbay[cmd]();
	} else if (cmd === 'exit' || cmd === 'Exit' || cmd === 'quit' || cmd === 'Quit'){
		console.log("Exiting");
		process.exit(0);
	} else {
		console.log("Unrecognized command: " + cmd);
	}	
}

function interactive(){
	const mrl = readline.createInterface({
		input: process.stdin,
		output: process.stdout,
		prompt: 'panswag] '
	  });

	  mrl.prompt();

	  mrl.on('line', (l)=>{
	    parseArgs(l.trim());
	    mrl.prompt();
	  });
}

function main(args){
	if(args.length <= 2){
	  interactive();  
	} else {
          console.log("process arguments");	
	}	
}

exports.handle = main;
