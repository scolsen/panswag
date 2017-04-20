//swagger reader, responsible for parsing swagger.
const fs = require('fs');
let cwd = process.cwd();
function read(file, signal){
	if(signal === 'data'){
		//convert to JSON format.
	} else if (signal === 'file') {
		try{
			if(file.match(/\/|\\/)){
				let files = fs.readFileSync(file);
				return JSON.parse(files);	
			} else {
				let files = fs.readFileSync(cwd + '/' + file);
				return JSON.parse(files);	
			}
		} catch(e) {
			console.log(e.toString() + "\n", "Could not read files: " + file);	
		}
	}
}
module.exports.read = read;
