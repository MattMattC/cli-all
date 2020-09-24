#!/usr/bin/env node
const chalk = require("chalk");
const log = console.log;
const clear = require("clear");
const yargs = require("yargs");

clear();
log(chalk.blue("Welcome abord"));
require("./commands");
yargs.option("verbose", {
    alias: "v",
    type: "boolean",
    description: "Run with verbose logging",
}).argv;
