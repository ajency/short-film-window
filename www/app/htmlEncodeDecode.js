var htmlEnDeCode;

htmlEnDeCode = (function() {
  var addCharacterEntities, charToEntity, charToEntityRegex, entityToChar, entityToCharRegex, htmlDecode, htmlEncode, resetCharacterEntities;
  charToEntityRegex = void 0;
  entityToCharRegex = void 0;
  charToEntity = void 0;
  entityToChar = void 0;
  resetCharacterEntities = function() {
    charToEntity = {};
    entityToChar = {};
    addCharacterEntities({
      '&amp;': '&',
      '&gt;': '>',
      '&lt;': '<',
      '&quot;': '"',
      '&#39;': '\''
    });
  };
  addCharacterEntities = function(newEntities) {
    var charKeys, echar, entityKeys, key, val;
    charKeys = [];
    entityKeys = [];
    key = void 0;
    echar = void 0;
    for (val in newEntities) {
      echar = newEntities[val];
      entityToChar[val] = echar;
      charToEntity[echar] = val;
      charKeys.push(echar);
      entityKeys.push(val);
    }
    charToEntityRegex = new RegExp('(' + charKeys.join('|') + ')', 'g');
    entityToCharRegex = new RegExp('(' + entityKeys.join('|') + '|&#[0-9]{1,5};' + ')', 'g');
  };
  htmlEncode = function(value) {
    var htmlEncodeReplaceFn;
    htmlEncodeReplaceFn = function(match, capture) {
      return charToEntity[capture];
    };
    if (!value) {
      return value;
    } else {
      return String(value).replace(charToEntityRegex, htmlEncodeReplaceFn);
    }
  };
  htmlDecode = function(value) {
    var htmlDecodeReplaceFn;
    htmlDecodeReplaceFn = function(match, capture) {
      if (capture in entityToChar) {
        return entityToChar[capture];
      } else {
        return String.fromCharCode(parseInt(capture.substr(2), 10));
      }
    };
    if (!value) {
      return value;
    } else {
      return String(value).replace(entityToCharRegex, htmlDecodeReplaceFn);
    }
  };
  resetCharacterEntities();
  return {
    htmlEncode: htmlEncode,
    htmlDecode: htmlDecode
  };
})();
