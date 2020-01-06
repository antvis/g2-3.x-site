# event-simulate [![spm version](http://spmjs.io/badge/event-simulate)](http://spmjs.io/package/event-simulate)

---



## Install

```
$ spm install event-simulate --save
```

## Usage

```js
var Simulate = require('event-simulate');

Simulate.simulate(dom,'click'); //模拟点击


Simulate.simulate(dom,'mouseover',{
  pageX : 100,
  pageY : 100
});

// use eventSimulate
```
