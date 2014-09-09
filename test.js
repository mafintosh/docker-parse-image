var parse = require('./')
var tape = require('tape')

tape('basic', function(t) {
  t.same(parse('mafintosh/test'), {
    registry:null,
    namespace:'mafintosh',
    repository:'test',
    tag:'latest',
    name: 'mafintosh/test',
    fullname: 'mafintosh/test:latest'
  })

  t.same(parse('ubuntu'), {
    registry:null,
    namespace:'library',
    repository:'ubuntu',
    tag:'latest',
    name: 'library/ubuntu',
    fullname: 'library/ubuntu:latest'
  })

  t.same(parse('mafintosh/test:14.04'), {
    registry:null,
    namespace:'mafintosh',
    repository:'test',
    tag:'14.04',
    name: 'mafintosh/test',
    fullname: 'mafintosh/test:14.04'
  })

  t.same(parse('ubuntu:14.04'), {
    registry:null,
    namespace:'library',
    repository:'ubuntu',
    tag:'14.04',
    name: 'library/ubuntu',
    fullname: 'library/ubuntu:14.04'
  })

  t.same(parse('registry.com/ubuntu:14.04'), {
    registry:'registry.com',
    namespace:'library',
    repository:'ubuntu',
    tag:'14.04',
    name: 'registry.com/library/ubuntu',
    fullname: 'registry.com/library/ubuntu:14.04'
  })

  t.same(parse('registry.com/library/ubuntu:14.04'), {
    registry:'registry.com',
    namespace:'library',
    repository:'ubuntu',
    tag:'14.04',
    name: 'registry.com/library/ubuntu',
    fullname: 'registry.com/library/ubuntu:14.04'
  })

  t.end()
})

tape('basic with @', function(t) {
  t.same(parse('mafintosh/test'), {
    registry:null,
    namespace:'mafintosh',
    repository:'test',
    tag:'latest',
    name: 'mafintosh/test',
    fullname: 'mafintosh/test:latest'
  })

  t.same(parse('ubuntu'), {
    registry:null,
    namespace:'library',
    repository:'ubuntu',
    tag:'latest',
    name: 'library/ubuntu',
    fullname: 'library/ubuntu:latest'
  })

  t.same(parse('mafintosh/test@14.04'), {
    registry:null,
    namespace:'mafintosh',
    repository:'test',
    tag:'14.04',
    name: 'mafintosh/test',
    fullname: 'mafintosh/test:14.04'
  })

  t.same(parse('ubuntu@14.04'), {
    registry:null,
    namespace:'library',
    repository:'ubuntu',
    tag:'14.04',
    name: 'library/ubuntu',
    fullname: 'library/ubuntu:14.04'
  })

  t.same(parse('registry.com/ubuntu@14.04'), {
    registry:'registry.com',
    namespace:'library',
    repository:'ubuntu',
    tag:'14.04',
    name: 'registry.com/library/ubuntu',
    fullname: 'registry.com/library/ubuntu:14.04'
  })

  t.same(parse('registry.com/library/ubuntu@14.04'), {
    registry:'registry.com',
    namespace:'library',
    repository:'ubuntu',
    tag:'14.04',
    name: 'registry.com/library/ubuntu',
    fullname: 'registry.com/library/ubuntu:14.04'
  })

  t.end()
})
