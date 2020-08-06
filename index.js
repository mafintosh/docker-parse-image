const regexp = /^(?:(?<domain>(?<hostname>(?:[a-zA-Z0-9]|[a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9])(?:(?:\.(?:[a-zA-Z0-9]|[a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9]))+)?)(?::(?<port>[0-9]+))?)\/)?(?:(?<org>[a-z0-9]+(?:(?:(?:[._]|__|[-]*)[a-z0-9]+)+)?)\/)?(?<name>(?:[a-z0-9]+(?:(?:(?:[._]|__|[-]*)[a-z0-9]+)+)?\/?)+)(?::(?<tag>[\w][\w.-]{0,127}))?(?:@(?<digest>[A-Za-z][A-Za-z0-9]*(?:[-_+.][A-Za-z][A-Za-z0-9]*)*[:][a-zA-Z0-9]{32,}))?/

module.exports = function(image) {
  var match = image.match(regexp)
  if (!match) return null

  var groups = match.groups

  var registry = groups.domain
  var namespace = groups.org
  var repository = groups.name
  var tag = groups.tag

  if (!namespace && registry && !/[:.]/.test(registry)) {
    namespace = registry
    registry = null
  }

  var result = {
    registry: registry || null,
    namespace: namespace || null,
    repository: repository,
    tag: tag || null
  }

  registry = registry ? registry+'/' : ''
  namespace = namespace && namespace !== 'library' ? namespace+'/' : ''
  tag = tag && tag !== 'latest' ? ':'+tag : ''

  result.name = registry + namespace + repository + tag
  result.fullname = registry + (namespace || 'library/') + repository + (tag || ':latest')

  return result
}