//txt.js
const reader = require('./reader.js');
const parseOpts = require('./options.js');
const fs = require('fs');

function test(options){
	//testing function
	let optObj = parseOpts(options);
	console.log(optObj);
}

module.exports = function (options){
	let optObj = parseOpts(options);
	let data = reader.read(optObj);
	if (optObj.hasOwnProperty('summary')){
		console.log("Swagger version", data.swagger);	
	}
}

