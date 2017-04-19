//patchbay.js store of all new processes.

const patchbay = {}; //init patchbay object.
patchbay.test = require('./test.js');
patchbay.help = require('./help.js');
exports.patchbay = patchbay;
