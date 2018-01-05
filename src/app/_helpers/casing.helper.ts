import { isObject, isNumber, objectify } from './objects.helper'

export function snakeToCamel(data, depth = 1000) {
  if (isObject(data)) {
    if (typeof depth === 'undefined') {
      depth = 1;
    }
    return _processKeys(data, _camelize, depth);
  } else {
    return _camelize(data);
  }
};

// export function camelToSnake(data, depth = 1000) {
//   if (isObject(data)) {
//     if (typeof depth === 'undefined') {
//       depth = 1;
//     }
//     return _processKeys(data, _snakelize, depth);
//   } else {
//     return _snakelize(data);
//   }
// };

// // snakelize a string formed in underscore
// function _snakelize(key) {
//   let separator = '_';
//   let split = /(?=[A-Z])/;

//   return key.split(split).join(separator).toLowerCase();
// }

// camelize a string formed in underscore
function _camelize(key) {
  if (isNumber(key)) {
    return key;
  }

  key = key.replace(/[\-_\s]+(.)?/g, function(match, ch) {
    return ch ? ch.toUpperCase() : '';
  });
  // Ensure 1st char is always lowercase
  return key.substr(0, 1).toLowerCase() + key.substr(1);
}

// camelize/snakelize keys of an object
// @param {number} depth to which level of keys should it process
function _processKeys(obj, processer, depth) {
  // console.log(obj);
  if (depth === 0 || !isObject(obj) || obj == null) {
    return objectify(obj);
  }
  
  if (Array.isArray(obj)) {
    var i;
    for(i=0;i<obj.length;i++){
      obj[i] = snakeToCamel(obj[i]);
    }
    return obj;
  }

  let result = {};
  let keys = Object.keys(obj);

  for (let i = 0; i < keys.length; i++) {
    result[processer(keys[i])] = _processKeys(obj[keys[i]], processer, depth - 1);

  }

  return result;
}

