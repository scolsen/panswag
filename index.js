#!/usr/bin/env node
const handler = require('./lib/handler.js');
const argvs = process.argv;
const fs = require('fs');
const path = require('path');
global.rootDir = path.resolve(__dirname);

//grab version
let pkgf = fs.readFileSync('./package.json');
let pkgj = JSON.parse(pkgf); 

console.log(pkgj.name + " " + pkgj.version + "\n\t" + pkgj.description);
console.log("\tRun help to view application help. Run exit to quit.");

handler.handle(argvs);
