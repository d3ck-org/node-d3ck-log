'use strict'

var util = require('util')
var assert = require('assert')

var should = function should (value, expected, msg) {
  if (expected === 'notNull') {
    assert(value != null, msg)
  } else {
    assert(value === expected, msg)
  }
  console.log('[OK] %s', msg)
}

console.log('Initializing bunyan logger')
var log = require('..')
var logUtil = require('../util')
var funcs = ['getStdoutStream', 'getStderrStream', 'getFileStream',
             'getFileRotateStream', 'setLogger', 'setStreams']
funcs.forEach(function (stream) {
  should(logUtil, 'notNull',
         util.format('"logUtil.%s" function should exist', stream))
})

should(log.level(), 30, 'Log level should be "info"')
console.log('Changing log level to debug')
log.level('trace')
should(log.level(), 10, 'Log level should be "debug"')

console.log('Currently enabled streams: STDOUT')
should(log.streams.length, 1, 'Number of enabled streams should be 1')
console.log('Setting enabled streams to STDOUT and STDERR')
logUtil.setStreams([logUtil.getStdoutStream('info'),
                    logUtil.getStderrStream('info')])
should(log.streams.length, 2, 'Number of enabled streams should be 2')

should(log.serializers, null, 'A standard serializer should not exist')
console.log('Adding "err" standard serializer')
logUtil.addStdSerializers(['err'])
should(log.serializers, 'notNull', 'A standard serializer should exist')

console.log('\nAll tests successfully passed')
