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
  element.unshift(array)
return array
}
