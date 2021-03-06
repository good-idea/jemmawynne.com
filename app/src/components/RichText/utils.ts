// Store markers outside of the function scope,
// not to recreate them on every call
const entities = {
  amp: '&',
  apos: "'",
  lt: '<',
  gt: '>',
  quot: '"',
  nbsp: '\xa0',
}
const entityPattern = /&([a-z]+);/gi

export function decodeHTML(text: string): string {
  // A single replace pass with a static RegExp is faster than a loop
  return text.replace(entityPattern, function (match, entity) {
    entity = entity.toLowerCase()
    if (entities.hasOwnProperty(entity)) {
      return entities[entity]
    }
    // return original string if there is no matching entity (no replace)
    return match
  })
}
