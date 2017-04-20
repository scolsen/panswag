//split file args to separate process
const reader = require('./reader.js');
const parseOpts = require('./options.js');

module.exports = function(options, fn){
	let opt = parseOpts(options);
	if(opt.hasOwnProperty('data')){
		let data = reader.read(opt.data, 'data');
	} else {
		let farr = opt.file.split(" ");
		for (i = 0; i < farr.length; i++){
			let data = reader.read(farr[i], 'file');
			console.log('\n\033[1m' + farr[i] + "\n__________");	
			fn(opt, data);
		}
	}
}
