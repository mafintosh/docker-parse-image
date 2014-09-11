module.exports = function(image) {
  var match = image.match(/^(?:([^\/]+)\/)?(?:([^\/]+)\/)?([^@:\/]+)(?:[@:](.+))?$/)
  if (!match) return null

  var registry = match[1]
  var namespace = match[2]

  if (!namespace && registry && !/[:.]/.test(registry)) {
    namespace = registry
    registry = null
  }

  var result = {
    registry: registry || null,
    namespace: namespace || null,
    repository: match[3],
    tag: match[4] || null
  }

  result.name = (registry ? registry+'/' : '') + (namespace ? namespace+'/' : '') + result.repository
  result.fullname = result.name+(result.tag ? ':'+result.tag : '')

  return result
}