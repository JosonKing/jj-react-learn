# log4jkjs
Log for javascript.

[![NPM](https://nodei.co/npm/log4jkjs.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/log4jkjs/)

## installation
```bash
npm install log4jkjs
```

## usage
```javascript
var logger = require('./index');

// logger.config(); // default: 'ERROR', 'black', 'console'
logger.config('log', 'red', 'console');
logger.log('hello log', 'log2', 'log3');
logger.info('hello log');
logger.error('hello log');
logger.warn('hello log');
logger.debug('hello log');
```
> Output
```bash
2018-10-23 16:17:07.75 LOG => hello log log2 log3
2018-10-23 16:17:07.80 INFO => hello log
2018-10-23 16:17:07.81 ERROR => hello log
2018-10-23 16:17:07.81 WARN => hello log
2018-10-23 16:17:07.82 DEBUG => hello log
```