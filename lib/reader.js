//swagger reader, responsible for parsing swagger.
function read(swagger){
	return JSON.parse(swagger);
}
module.exports.read = read;
