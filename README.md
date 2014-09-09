# docker-parse-image

Parse docker image urls

```
npm install docker-parse-image
```

## Usage

``` js
var parse = require('docker-parse-image')

console.log(parse('mafintosh/test'))
// --> {namespace:'mafintosh', repository:'test', tag:'latest'}

console.log(parse('ubuntu'))
// --> {namespace:'library', repository:'ubuntu', tag:'latest'}

console.log(parse('mafintosh/test:14.04'))
// --> {namespace:'library', repository:'ubuntu', tag:'14.04'}

console.log(parse('ubuntu:14.04'))
// --> {namespace:'library', repository:'ubuntu', tag:'14.04'}

console.log(parse('registry.com/ubuntu:14.04'))
// --> {registry:'registry.com', namespace:'library', tag:'14.04'}
```

## License

MIT
