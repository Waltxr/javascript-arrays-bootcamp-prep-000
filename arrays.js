var chocolateBars = [
  'snickers',
  'hundred grand',
  'kitkat',
  'skilles'
]

function addElementToBeginningOfArray(array, element) {
  newarray = [element, ...array]
  return newarray
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  array = [element, ...array]
  return array
}