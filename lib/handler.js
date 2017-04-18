//handler.js -- process user input and files.
const fs = require('fs');
const readline = require('readline');

function parseArgs(cmd){
	switch(cmd){
	  default: 
	    console.log("Sorry, I don't know the command: " + cmd);
	    break;
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
