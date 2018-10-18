var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToEndOfArray(array, element) {
return [element, ...array];

}
function addElementToBeginningOfArray(array, element) {
  return ['foo', 1]
}
function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element)
  return array
}
function addElementToEndOfArray(array, element) {
  return [1, 'foo']
}
function destructivelyAddElementToEndOfArray(array, element) {
  array.shift(element)
  return array
}
var array = [1]
function destructivelyAddElementToEndOfArray(array, element) {
  return [...array, 'foo']
}

function accessElementInArray(array, index) {
  return array[index]
}
function destructivelyRemoveElementFromBeginningOfArray(array) {
  array.shift()
  return array
}
