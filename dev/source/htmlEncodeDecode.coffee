htmlEnDeCode = do ->
  charToEntityRegex = undefined
  entityToCharRegex = undefined
  charToEntity = undefined
  entityToChar = undefined

  resetCharacterEntities = ->
    charToEntity = {}
    entityToChar = {}
    # add the default set
    addCharacterEntities
      '&amp;': '&'
      '&gt;': '>'
      '&lt;': '<'
      '&quot;': '"'
      '&#39;': '\''
    return

  addCharacterEntities = (newEntities) ->
    charKeys = []
    entityKeys = []
    key = undefined
    echar = undefined
    for val of newEntities
      echar = newEntities[val]
      entityToChar[val] = echar
      charToEntity[echar] = val
      charKeys.push echar
      entityKeys.push val
    charToEntityRegex = new RegExp('(' + charKeys.join('|') + ')', 'g')
    entityToCharRegex = new RegExp('(' + entityKeys.join('|') + '|&#[0-9]{1,5};' + ')', 'g')
    return

  htmlEncode = (value) ->

    htmlEncodeReplaceFn = (match, capture) ->
      charToEntity[capture]

    if !value then value else String(value).replace(charToEntityRegex, htmlEncodeReplaceFn)

  htmlDecode = (value) ->

    htmlDecodeReplaceFn = (match, capture) ->
      if capture of entityToChar then entityToChar[capture] else String.fromCharCode(parseInt(capture.substr(2), 10))

    if !value then value else String(value).replace(entityToCharRegex, htmlDecodeReplaceFn)

  resetCharacterEntities()
  {
    htmlEncode: htmlEncode
    htmlDecode: htmlDecode
  }
