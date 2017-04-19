//view.js -- output swagger info to console.
const reader = require('./reader.js');
const parseOpts = require('./options.js');

function summarize(data){
	console.log("\n\033[1mSwagger summary: \033[0m");
	console.log("Swagger version: ", data.swagger);
	//console.log("Swagger info: ", data.info.toString());
	console.log("Swagger basePath: ", data.basePath);
	//console.log("Swagger tags: ", data.tags.toString());
	console.log("Swagger schemes: ", data.schemes);
	//console.log("Swagger paths: ", data.paths.toString());
	//console.log("Swagger definitions: ", data.definitions.toString());
}

function definitions(data){
	console.log("\n\033[1mSwagger definitions: \033[0m");
	for(let k in data.definitions){
		if(data.definitions.hasOwnProperty(k)){
			console.log("\t" + k);
		}
	}
}

function endpoints(data){
	console.log("\n\033[1mSwagger endpoints: \033[0m");
	for(let k in data.paths){
		console.log("\t" + k);
	}
}

function tags(data){
	console.log("\n\033[1mSwagger tags: \033[0m");
	for(let k in data.tags){
		console.log("\t" + data.tags[k].name);
	}
}

module.exports = function (options){
	let optObj = parseOpts(options);
	let data = reader.read(optObj);
	if (optObj.hasOwnProperty('summary')){summarize(data);}
	if (optObj.hasOwnProperty('definitions')){definitions(data);}
	if (optObj.hasOwnProperty('endpoints')){endpoints(data);}
	if (optObj.hasOwnProperty('tags')){tags(data);}
}
