#!/usr/bin/env node
const chalk = require("chalk");
const log = console.log;
const clear = require("clear");
const yargs = require("yargs");
const boxen = require('boxen');

clear();
console.log(boxen('Welcome to your Cli MattMatt', {padding: 1, margin: 1, borderStyle: 'double'}));

require("./commands");
yargs.option("verbose", {
    alias: "v",
    type: "boolean",
    description: "Run with verbose logging",
}).argv;
