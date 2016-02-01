[![npm Version](https://img.shields.io/npm/v/node-d3ck-log.svg)](https://www.npmjs.com/package/node-d3ck-log)
[![JS-Standard](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)

# node-d3ck-log

Lightweight wrapper and utilities for the node.js [bunyan](https://github.com/trentm/node-bunyan) logger

**Please note** the major version of this module: [Major version zero (0.y.z) is for initial development. Anything may change at any time. The public API should not be considered stable.](http://semver.org/#spec-item-4).

## Features

* Initializes a preconfigured (STDOUT / info) [node-bunyan](https://github.com/trentm/node-bunyan) logger (sharable across the whole application)
* Supports stream and log level changing via utility functions
* No extra module dependencies except [node-bunyan](https://github.com/trentm/node-bunyan)
* Well documented (readme, manual and API reference)

## Installation

    npm install node-d3ck-log

## Usage

    var log = require('node-d3ck-log')
    var logutil = require('node-d3ck-log/util')
    var logLevel = log.level()                         // returns 30 (info)
    log.info('An info message')                        // logs to STDOUT
    log.level('trace')                                 // sets log level to 10 (trace)
    log.trace('A trace message')                       // logs to STDOUT
    var stdoutStream = logutil.getStdoutStream('trace')  // get STDOUT-trace stream
    var stderrStream = logutil.getStderrStream('trace')  // get STDERR-trace stream
    logutil.setStreams([stdoutStream, stderrStream])   // sets streams to STDOUT and STDERR
    log.trace('A trace message')                       // logs to STDOUT and STDERR

## Documentation

* [User Manual](https://github.com/d3ck-org/node-d3ck-log/blob/master/doc/manual.md)
* [API Reference](https://github.com/d3ck-org/node-d3ck-log/blob/master/doc/api.md)

## See also / Credits

* [node-bunyan](https://github.com/trentm/node-bunyan)
* [js-standard](https://github.com/feross/standard)
* [jsdoc-to-markdown](https://github.com/75lb/jsdoc-to-markdown)
* [node-d3ck-bstrap](https://github.com/d3ck-org/node-d3ck-bstrap)
* [node-d3ck-cfg](https://github.com/d3ck-org/node-d3ck-cfg)
