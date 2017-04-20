//view.js -- output swagger info to console.
const manage = require('./manager.js');
function summarize(data){
	console.log("\n\033[1mSwagger summary: \033[0m");
	console.log("Swagger version: ", data.swagger);
	console.log("Swagger basePath: ", data.basePath);
	console.log("Swagger schemes: ", data.schemes + "\n");
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

function info(data){
	console.log("\n\033[1mSwagger info: \033[0m");
	for(let k in data.info){
		console.log("\t" + k);
	}
}

function job(opts, data){
	if (opts.hasOwnProperty('summary')){summarize(data);}
	if (opts.hasOwnProperty('definitions')){definitions(data);}
	if (opts.hasOwnProperty('endpoints')){endpoints(data);}
	if (opts.hasOwnProperty('tags')){tags(data);}
	if (opts.hasOwnProperty('info')){info(data);}
}

module.exports = function (options){
	manage(options, job);
}
