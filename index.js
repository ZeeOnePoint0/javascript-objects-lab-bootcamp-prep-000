var recipes = {}

function updateObjectWithKeyAndValue(object, key, value) {

  return Object.assign({}, object, {[key]: value});


}

function destructivelyUpdateObjectWithKeyAndValue(object, key) {

  object[key] = value;

  return object;

}

function deleteFromObjectByKey(object, key) {

  const newObject = Object.assign({}, object);

  delete newObject[key];

  return newObject;

}

function destructivelyDeleteFromObjectByKey(object, key) {

  delete object.key

  return object


}
