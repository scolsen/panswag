//txt.js
const reader = require('./reader.js');
const parseOpts = require('./options.js');

function test(options){
	//testing function
	let optObj = parseOpts(options);
	console.log(optObj);
}

module.exports = function (options){
	test(options);	
}

