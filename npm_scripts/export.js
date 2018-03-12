#!/bin/env node

const argv = require('yargs').argv;
const ncp = require('ncp').ncp;
const config = require('./project_config.js').export_settings;
const path = require('path');

ncp( config.source, config.dest, (err) => {
  if (err) {
    return console.error(err);
  }
  console.log('done!');
});