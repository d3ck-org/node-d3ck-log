# node-d3ck-log

Lightweight wrapper and utilities for the node.js [bunyan](https://github.com/trentm/node-bunyan) logger

## Description

[node-d3ck-log](https://github.com/d3ck-org/node-d3ck-log) returns a preconfigured (STDOUT / info) [node-bunyan](https://github.com/trentm/node-bunyan) logger. Additionally it provides some simple utilities (`node-d3ck-log/util`) to configure the logger. Please see the __Usage__ and __Utilities__ sections for details.

## Installation

    npm install node-d3ck-log

## Usage

    // module logTest
    var log = require('node-d3ck-log')
    module.exports = function (msg) { log.trace(msg) }

    // main script
    var log = require('node-d3ck-log')
    var logUtil = require('node-d3ck-log/util')
    var moduleTraceLog = require('./logTest')
    var logLevel = log.level()                   // returns 30 (info)
    log.info('An info message')                  // logs to STDOUT
    log.trace('A trace message')                 // discarded because trace < info
    moduleTraceLog('A module trace message')     // discarded because trace < info
    log.level('trace')                           // sets log level to 10 (trace)
    log.trace('A trace message')                 // logs to STDOUT
    var stdoutStream = logUtil.getStdoutStream('trace')  // get STDOUT-trace stream
    var stderrStream = logUtil.getStderrStream('trace')  // get STDERR-trace stream
    logUtil.setStreams([stdoutStream,stderrStream]) // sets streams to STDOUT+STDERR
    log.trace('A trace message')                 // logs to STDOUT and STDERR
    moduleTraceLog('A module trace message')     // logs to STDOUT and STDERR
    logUtil.addStdSerializers(['err', 'req'])    // activate err and req standard serializers

See the test script for a working example:

    $ cd /path/to/node-d3ck-log
    $ npm test               # same as "node test/test.js"

## Utilities

All utility functions returned by `require('node-d3ck-log/util')` are listed in the [API Reference](https://github.com/d3ck-org/node-d3ck-log/blob/master/doc/api.md).

## See also

* [README](https://github.com/d3ck-org/node-d3ck-log/blob/master/README.md)
* [API Reference](https://github.com/d3ck-org/node-d3ck-log/blob/master/doc/api.md)
* [node-bunyan](https://github.com/trentm/node-bunyan)
