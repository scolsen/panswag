//options.js
let shorts = {
	'f' : 'file',
	'S' : 'summary',
	'd' : 'data'
}

function expandShort(flag){
	if(shorts.hasOwnProperty(flag)){
		return shorts[flag];
	} else {
		return flag;
	}
}

module.exports = function(opts){
	let obj = {
		file : ''
	};
	let prev = 'file';
	for(i = 0; i < opts.length; i ++){
		if(opts[i].match(/--/) || opts[i].match(/-/)){
			let nxt = i + 1;
			prev = opts[i].replace(/-|--/g, '');
			prev = expandShort(prev);
			obj[prev] = opts[nxt];
		} else if (obj[prev].indexOf(opts[i]) != -1){
			//do not add, processesed last round.	
		} else {
			obj.file = obj.file + opts[i] + " ";
		}
	}
	obj.file = obj.file.trim();
	return obj;
}
