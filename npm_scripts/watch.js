#!/bin/env node

const path = require('path');
const argv = require('yargs').argv;
const watcher = require('node-watch');
const exporter = require('./export.js');
const colors = require('colors/safe');

watcher( path.resolve(__dirname, '..'), {recursive: 'true'}, (e, name) => {
  console.log( colors.green('Saw change on ' + name) );
  exporter();
});