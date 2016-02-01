'use strict'

var bunyan = require('bunyan')

var log

/**
* Get STDOUT stream (simple wrapper for {@link https://github.com/trentm/node-bunyan#stream-type-stream|stream-type-stream}).
* @arg {string} level - Log level
* @arg {boolean} [src=false] - Enable/disable source details in log messages (https://github.com/trentm/node-bunyan#src)
* @return {object} STDOUT stream
* @example
* var stdoutStream = require('node-d3ck-log/util').getStdoutStream('info')
*/
module.exports.getStdoutStream = function (level, src) {
  return {
    name: 'stdout',
    level: level,
    stream: process.stdout,
    src: src || false
  }
}

/**
* Get STDERR stream (simple wrapper for {@link https://github.com/trentm/node-bunyan#stream-type-stream|stream-type-stream}).
* @arg {string} level - Log level
* @arg {boolean} [src=false] - Enable/disable source details in log messages (https://github.com/trentm/node-bunyan#src)
* @return {object} STDERR stream
* @example
* var stderrStream = require('node-d3ck-log/util').getStderrStream('info', true)
*/
module.exports.getStderrStream = function (level, src) {
  return {
    name: 'stderr',
    level: level,
    stream: process.stderr,
    src: src || false
  }
}

/**
* Get file stream (simple wrapper for {@link https://github.com/trentm/node-bunyan#stream-type-file|stream-type-file}).
* @arg {string} level - Log level
* @arg {string} filePath - Path for logfile
* @arg {boolean} [src=false] - Enable/disable source details in log messages (https://github.com/trentm/node-bunyan#src)
* @return {object} file stream
* @example
* var fileStream = require('node-d3ck-log/util').getFileStream('info', '/tmp/bunyan.log')
*/
module.exports.getFileStream = function (level, filePath, src) {
  return {
    name: 'file',
    level: level,
    path: filePath,
    src: src || false
  }
}

/**
* Get file-rotate stream (simple wrapper for {@link https://github.com/trentm/node-bunyan#stream-type-rotating-file|stream-type-rotating-file}).
* @arg {string} level - Log level
* @arg {string} filePath - Path for logfile
* @arg {string} period - Period at which to rotate (e.g. 2w for two weeks) (https://github.com/trentm/node-bunyan#stream-type-rotating-file)
* @arg {number} count - Number of rotated files to keep
* @arg {boolean} [src=false] - Enable/disable source details in log messages (https://github.com/trentm/node-bunyan#src)
* @return {object} file-rotate stream
* @example
* var logUtil = require('node-d3ck-log/util')
* var fileRotateStream = logUtil.getFileRotateStream('info', '/tmp/bunyan.log', '1d', 5, true)
*/
module.exports.getFileRotateStream = function (level, filePath, period, count, src) {
  return {
    name: 'rotating-file',
    level: level,
    path: filePath,
    type: 'rotating-file',
    period: period,
    count: count,
    src: src || false
  }
}

/**
* Set logger that will be changed when calling setStreams().
* @arg {object} logger - bunyan logger object
* @example
* // with node-d3ck-log
* var log = require('node-d3ck-log')  // [1]
* var logUtil = require('node-d3ck-log/util')
* logUtil.setLogger(log) // note: NOT NEEDED because automatically done when requiring node-d3ck-log
* logUtil.setStreams([logUtil.getStderrStream('info')])   // changes the [1] logger
* // without node-d3ck-log
* var logUtil = require('node-d3ck-log/util')
* var log = require('bunyan').createLogger(...)   // [2]
* logUtil.setLogger(log)
* logUtil.setStreams([logUtil.getStderrStream('info')])   // changes the [2] logger
*/
module.exports.setLogger = function (logger) {
  log = logger
}

/**
* Set one or more streams as active logger streams.
* @arg {object[]} streams - List with Streams (e.g. a stream returned by getXStream())
* @arg {object} [logger] - Change streams of this bunyan logger object (instead of the default logger set by setLogger())
* @example
* // with node-d3ck-log
* var log = require('node-d3ck-log')
* var logUtil = require('node-d3ck-log/util')
* logUtil.setStreams([logUtil.getStderrStream('info'), logUtil.getStdoutStream('warn')])
* // without node-d3ck-log
* var logUtil = require('node-d3ck-log/util')
* var log = require('bunyan').createLogger(...)
* logUtil.setStreams([logUtil.getStderrStream('info')])
*                    logUtil.getFileStream('warn', '/tmp/bunyan.log')], log)
*/
module.exports.setStreams = function (streams, logger) {
  logger = logger || log
  logger.streams = []
  streams.forEach(function (stream) {
    logger.addStream(stream)
  })
}

/**
* Activate {@link https://github.com/trentm/node-bunyan#serializers|standard serializers}.
* @arg {string[]} serializers - List with standard serializer names (e.g. err, req)
* @arg {object} [logger] - Add serializers to this bunyan logger object (instead of the default logger set by setLogger())
* @example
* var logUtil = require('node-d3ck-log/util')
* logUtil.addStdSerializers(['err', 'req', 'res'])
*/
module.exports.addStdSerializers = function (serializers, logger) {
  logger = logger || log
  var sers = {}
  serializers.forEach(function (serializer) {
    if (bunyan.stdSerializers.hasOwnProperty(serializer)) {
      sers[serializer] = bunyan.stdSerializers[serializer]
    }
    logger.addSerializers(sers)
  })
}
