#!/usr/bin/env node
'use strict'
var HDWallet = require('./lib/hdwallet');
var version = require('./package.json').version;
var description = require('./package.json').description;
var program = require('commander');

var argMnemonic, argPassword = undefined;
program
    .version(version)
    .arguments('<mnemonic> <password>')
    .description(description)
    .option('-i, --account-index <n>', 'target index of hdwallet accounts. default: 0', parseInt, 0)
    .parse(process.argv);

argMnemonic = program.args[0];
argPassword = program.args[1];

if(typeof argMnemonic === "undefined") {
  console.error('no mnemonic given!');
  program.help();
  process.exit(1);
}
if(typeof argPassword === "undefined" || argPassword.length == 0) {
  console.error('no password given!');
  program.help();
  process.exit(1);
}

let hdwallet = new HDWallet(argMnemonic);
console.log(hdwallet.getKeystoreJson(argPassword, program.accountIndex));
