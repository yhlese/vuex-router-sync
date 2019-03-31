// https://github.com/faisalman/ua-parser-js
let Parser = require('ua-parser-js');
let p = new Parser()
console.log(p.getBrowser())
console.log(p.getOS())
