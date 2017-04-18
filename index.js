#!/usr/bin/env node
const handler = require('./lib/handler.js');
const argvs = process.argv;
console.log("!");

handler.handle(argvs);
