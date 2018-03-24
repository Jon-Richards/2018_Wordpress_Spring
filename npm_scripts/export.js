#!/bin/env node

const argv = require('yargs').argv;
const ncp = require('ncp').ncp;
const config = require('./project_config.js').export_settings;
const path = require('path');
const colors = require('colors/safe');

module.exports = () => {
  ncp( config.source, config.dest, (err) => {
    if (err) {
      return console.log(colors.red(err));
    } else {
      console.log( colors.green('Exporting to ' + config.dest + '\r\n') ) ;
    }
  });
}