//swagger reader, responsible for parsing swagger.
const fs = require('fs');
let cwd = process.cwd();
function read(options){
	if(options.hasOwnProperty('data')){
		//convert to JSON format.
	} else if (options.hasOwnProperty('file')) {
		try{
			if(options.file.match(/\/|\\/)){
				let files = fs.readFileSync(options.file);
				return JSON.parse(files);	
			} else {
				let files = fs.readFileSync(cwd + '/' + options.file);
				return JSON.parse(files);	
			}
		} catch(e) {
			console.log(e.toString() + "\n", "Could not read files: " + options.file);	
		}
	}
}
module.exports.read = read;
