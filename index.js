module.exports = function(image) {
  var match = image.match(/^(?:([^\/]+)\/)?(?:([^\/]+)\/)?([^@:\/]+)(?:[@:](.+))?$/)
  if (!match) return null

  var registry = match[1]
  var namespace = match[2]
  var repository = match[3]
  var tag = match[4]

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