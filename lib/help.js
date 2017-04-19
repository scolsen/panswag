//help module--diplay help files for this application.
const fs = require('fs');
module.exports = function(cmd){
	try {
		fs.readFileSync(rootDir + '/help/' + cmd + '.json');
	} catch(e) {
		console.log(e + "\n" + "Could not load help for: " + cmd);
	}	
}
