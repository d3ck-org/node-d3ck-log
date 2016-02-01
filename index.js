'use strict'

var bunyan = require('bunyan')
var logUtil = require('./util')

var log = bunyan.createLogger(logUtil.getStdoutStream('info'))
logUtil.setLogger(log)
module.exports = log
