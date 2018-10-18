var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToEndOfArray(array, element) {
return [element, ...array];

}
function addElementToBeginningOfArray(array, element) {
  return array.unshift(element);
}
