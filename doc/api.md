## Functions

<dl>
<dt><a href="#getStdoutStream">getStdoutStream(level, [src])</a> ⇒ <code>object</code></dt>
<dd><p>Get STDOUT stream (simple wrapper for <a href="https://github.com/trentm/node-bunyan#stream-type-stream">stream-type-stream</a>).</p>
</dd>
<dt><a href="#getStderrStream">getStderrStream(level, [src])</a> ⇒ <code>object</code></dt>
<dd><p>Get STDERR stream (simple wrapper for <a href="https://github.com/trentm/node-bunyan#stream-type-stream">stream-type-stream</a>).</p>
</dd>
<dt><a href="#getFileStream">getFileStream(level, filePath, [src])</a> ⇒ <code>object</code></dt>
<dd><p>Get file stream (simple wrapper for <a href="https://github.com/trentm/node-bunyan#stream-type-file">stream-type-file</a>).</p>
</dd>
<dt><a href="#getFileRotateStream">getFileRotateStream(level, filePath, period, count, [src])</a> ⇒ <code>object</code></dt>
<dd><p>Get file-rotate stream (simple wrapper for <a href="https://github.com/trentm/node-bunyan#stream-type-rotating-file">stream-type-rotating-file</a>).</p>
</dd>
<dt><a href="#setLogger">setLogger(logger)</a></dt>
<dd><p>Set logger that will be changed when calling setStreams().</p>
</dd>
<dt><a href="#setStreams">setStreams(streams, [logger])</a></dt>
<dd><p>Set one or more streams as active logger streams.</p>
</dd>
<dt><a href="#addStdSerializers">addStdSerializers(serializers, [logger])</a></dt>
<dd><p>Activate <a href="https://github.com/trentm/node-bunyan#serializers">standard serializers</a>.</p>
</dd>
</dl>

<a name="getStdoutStream"></a>
## getStdoutStream(level, [src]) ⇒ <code>object</code>
Get STDOUT stream (simple wrapper for [stream-type-stream](https://github.com/trentm/node-bunyan#stream-type-stream)).

**Kind**: global function  
**Returns**: <code>object</code> - STDOUT stream  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| level | <code>string</code> |  | Log level |
| [src] | <code>boolean</code> | <code>false</code> | Enable/disable source details in log messages (https://github.com/trentm/node-bunyan#src) |

**Example**  
```js
var stdoutStream = require('node-d3ck-log/util').getStdoutStream('info')
```
<a name="getStderrStream"></a>
## getStderrStream(level, [src]) ⇒ <code>object</code>
Get STDERR stream (simple wrapper for [stream-type-stream](https://github.com/trentm/node-bunyan#stream-type-stream)).

**Kind**: global function  
**Returns**: <code>object</code> - STDERR stream  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| level | <code>string</code> |  | Log level |
| [src] | <code>boolean</code> | <code>false</code> | Enable/disable source details in log messages (https://github.com/trentm/node-bunyan#src) |

**Example**  
```js
var stderrStream = require('node-d3ck-log/util').getStderrStream('info', true)
```
<a name="getFileStream"></a>
## getFileStream(level, filePath, [src]) ⇒ <code>object</code>
Get file stream (simple wrapper for [stream-type-file](https://github.com/trentm/node-bunyan#stream-type-file)).

**Kind**: global function  
**Returns**: <code>object</code> - file stream  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| level | <code>string</code> |  | Log level |
| filePath | <code>string</code> |  | Path for logfile |
| [src] | <code>boolean</code> | <code>false</code> | Enable/disable source details in log messages (https://github.com/trentm/node-bunyan#src) |

**Example**  
```js
var fileStream = require('node-d3ck-log/util').getFileStream('info', '/tmp/bunyan.log')
```
<a name="getFileRotateStream"></a>
## getFileRotateStream(level, filePath, period, count, [src]) ⇒ <code>object</code>
Get file-rotate stream (simple wrapper for [stream-type-rotating-file](https://github.com/trentm/node-bunyan#stream-type-rotating-file)).

**Kind**: global function  
**Returns**: <code>object</code> - file-rotate stream  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| level | <code>string</code> |  | Log level |
| filePath | <code>string</code> |  | Path for logfile |
| period | <code>string</code> |  | Period at which to rotate (e.g. 2w for two weeks) (https://github.com/trentm/node-bunyan#stream-type-rotating-file) |
| count | <code>number</code> |  | Number of rotated files to keep |
| [src] | <code>boolean</code> | <code>false</code> | Enable/disable source details in log messages (https://github.com/trentm/node-bunyan#src) |

**Example**  
```js
var logUtil = require('node-d3ck-log/util')
var fileRotateStream = logUtil.getFileRotateStream('info', '/tmp/bunyan.log', '1d', 5, true)
```
<a name="setLogger"></a>
## setLogger(logger)
Set logger that will be changed when calling setStreams().

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| logger | <code>object</code> | bunyan logger object |

**Example**  
```js
// with node-d3ck-log
var log = require('node-d3ck-log')  // [1]
var logUtil = require('node-d3ck-log/util')
logUtil.setLogger(log) // note: NOT NEEDED because automatically done when requiring node-d3ck-log
logUtil.setStreams([logUtil.getStderrStream('info')])   // changes the [1] logger
// without node-d3ck-log
var logUtil = require('node-d3ck-log/util')
var log = require('bunyan').createLogger(...)   // [2]
logUtil.setLogger(log)
logUtil.setStreams([logUtil.getStderrStream('info')])   // changes the [2] logger
```
<a name="setStreams"></a>
## setStreams(streams, [logger])
Set one or more streams as active logger streams.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| streams | <code>Array.&lt;object&gt;</code> | List with Streams (e.g. a stream returned by getXStream()) |
| [logger] | <code>object</code> | Change streams of this bunyan logger object (instead of the default logger set by setLogger()) |

**Example**  
```js
// with node-d3ck-log
var log = require('node-d3ck-log')
var logUtil = require('node-d3ck-log/util')
logUtil.setStreams([logUtil.getStderrStream('info'), logUtil.getStdoutStream('warn')])
// without node-d3ck-log
var logUtil = require('node-d3ck-log/util')
var log = require('bunyan').createLogger(...)
logUtil.setStreams([logUtil.getStderrStream('info')])
                   logUtil.getFileStream('warn', '/tmp/bunyan.log')], log)
```
<a name="addStdSerializers"></a>
## addStdSerializers(serializers, [logger])
Activate [standard serializers](https://github.com/trentm/node-bunyan#serializers).

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| serializers | <code>Array.&lt;string&gt;</code> | List with standard serializer names (e.g. err, req) |
| [logger] | <code>object</code> | Add serializers to this bunyan logger object (instead of the default logger set by setLogger()) |

**Example**  
```js
var logUtil = require('node-d3ck-log/util')
logUtil.addStdSerializers(['err', 'req', 'res'])
```
