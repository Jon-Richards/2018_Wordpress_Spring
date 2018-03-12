#!/bin/env node

const path = require('path');

module.exports = {
  export_settings: {
    source: path.resolve(__dirname, '..', 'export'),
    dest: path.resolve(__dirname, '..', '..', '..', 'live', 'wordpress', 'wp-content', 'themes', 'March')
  }
}