let Parser = require('ua-parser-js');


var uastring = "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/535.2 (KHTML, like Gecko) Ubuntu/11.10 Chromium/15.0.874.106 Chrome/15.0.874.106 Safari/535.2";
let p = new Parser()
// p.setUA(uastring)
console.log(p.getBrowser())
console.log(p.getOS())
