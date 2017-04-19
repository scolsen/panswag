//help module--diplay help files for this application.
const fs = require('fs');
module.exports = function(cmd){
	let file;
	let jfile;	
	try {
		file = fs.readFileSync(rootDir + '/help/' + cmd + '.json');
		jfile = JSON.parse(file);
	} catch(e) {
		console.log(e + "\n" + "Could not load help for: " + cmd);
	} finally {
		if(jfile !== undefined){
			console.log("Name\n\t" + jfile.name + "\n"); 
			console.log("Synopsis\n\t" + jfile.synopsis + "\n");
			console.log("Description\n\t" + jfile.description + "\n");
		}
	} 
}
