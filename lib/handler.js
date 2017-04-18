//handler.js -- process user input and files.
const fs = require('fs');
const readline = require('readline');

function main(args){
	if(args.length <= 2){
	  const mrl = readline.createInterface({
		input: process.stdin,
		output: process.stdout,
		prompt: 'panswag] '
	  });

	  mrl.prompt();

	} else {
          console.log("process arguments");	
	}	
}

exports.handle = main;
