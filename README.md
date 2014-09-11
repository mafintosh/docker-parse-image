# docker-parse-image

Parse docker image urls

```
npm install docker-parse-image
```

[![build status](http://img.shields.io/travis/mafintosh/docker-parse-image.svg?style=flat)](http://travis-ci.org/mafintosh/docker-parse-image)

## Usage

``` js
var parse = require('docker-parse-image')

console.log(parse('mafintosh/test'))
// --> {namespace:'mafintosh', repository:'test', tag:null}

console.log(parse('ubuntu'))
// --> {namespace:null, repository:'ubuntu', tag:null}

console.log(parse('mafintosh/test:14.04'))
// --> {namespace:'mafintosh', repository:'test', tag:'14.04'}

console.log(parse('ubuntu:14.04'))
// --> {namespace:null, repository:'ubuntu', tag:'14.04'}

console.log(parse('registry.com/ubuntu:14.04'))
// --> {registry:'registry.com', namespace:null, tag:'14.04'}
```

## License

MIT
