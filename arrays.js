var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToEndOfArray(array, element) {
return [element, ...array];

}
function addElementToBeginningOfArray(array, element) {
  return ['foo', 1]
}
function destructivelyAddElementToBeginningOfArray(array, element) {
  return [...array, element]
  
}
