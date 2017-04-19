//options.js

let shorts = {
	'f' : 'file',
	'S' : 'summary'
}

function expandShort(flag){
	if(shorts.hasOwnProperty(flag)){
		return shorts[flag];
	} else {
		return flag;
	}
}

module.exports = function(opts){
	let obj = {};
	let prev;
	for(i = 0; i < opts.length; i ++){
		if(opts[i].match(/--/) || opts[i].match(/-/)){
			let nxt = i + 1;
			prev = opts[i].replace(/-|--/g, '');
			prev = expandShort(prev);
			obj[prev] = opts[nxt];
		} else if (obj[prev].indexOf(opts[i]) === -1){
			obj[prev] = obj[prev] + " " + opts[i];
		}
	}
	return obj;
}
//TODO add switch for shortcut, e.g. -f, expansion
