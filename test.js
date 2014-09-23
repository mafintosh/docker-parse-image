var parse = require('./')
var tape = require('tape')

tape('basic', function(t) {
  t.same(parse('mafintosh/test'), {
    registry:null,
    namespace:'mafintosh',
    repository:'test',
    tag:null,
    name:'mafintosh/test',
    fullname:'mafintosh/test:latest'
  })

  t.same(parse('ubuntu'), {
    registry:null,
    namespace:null,
    repository:'ubuntu',
    tag:null,
    name:'ubuntu',
    fullname:'library/ubuntu:latest'
  })

  t.same(parse('mafintosh/test:14.04'), {
    registry:null,
    namespace:'mafintosh',
    repository:'test',
    tag:'14.04',
    name:'mafintosh/test:14.04',
    fullname:'mafintosh/test:14.04'
  })

  t.same(parse('ubuntu:14.04'), {
    registry:null,
    namespace:null,
    repository:'ubuntu',
    tag:'14.04',
    name:'ubuntu:14.04',
    fullname:'library/ubuntu:14.04'
  })

  t.same(parse('registry.com/ubuntu:14.04'), {
    registry:'registry.com',
    namespace:null,
    repository:'ubuntu',
    tag:'14.04',
    name:'registry.com/ubuntu:14.04',
    fullname:'registry.com/library/ubuntu:14.04'
  })

  t.same(parse('registry.com/ubuntu:14.04'), {
    registry:'registry.com',
    namespace:null,
    repository:'ubuntu',
    tag:'14.04',
    name:'registry.com/ubuntu:14.04',
    fullname:'registry.com/library/ubuntu:14.04'
  })

  t.end()
})

tape('basic with @', function(t) {
  t.same(parse('mafintosh/test@14.04'), {
    registry:null,
    namespace:'mafintosh',
    repository:'test',
    tag:'14.04',
    name:'mafintosh/test:14.04',
    fullname:'mafintosh/test:14.04'
  })

  t.same(parse('ubuntu@14.04'), {
    registry:null,
    namespace:null,
    repository:'ubuntu',
    tag:'14.04',
    name:'ubuntu:14.04',
    fullname:'library/ubuntu:14.04'
  })

  t.same(parse('registry.com/ubuntu@14.04'), {
    registry:'registry.com',
    namespace:null,
    repository:'ubuntu',
    tag:'14.04',
    name:'registry.com/ubuntu:14.04',
    fullname:'registry.com/library/ubuntu:14.04'
  })

  t.same(parse('registry.com/ubuntu@14.04'), {
    registry:'registry.com',
    namespace:null,
    repository:'ubuntu',
    tag:'14.04',
    name:'registry.com/ubuntu:14.04',
    fullname:'registry.com/library/ubuntu:14.04'
  })

  t.end()
})
