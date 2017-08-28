var chocolateBars = [
  'snickers',
  'hundred grand',
  'kitkat',
  'skilles'
]

function addElementToBeginningOfArray(array, element) {
  beginingarray = [element, ...array]
  return beginingarray
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  array = [element, ...array]
  return array
}

function addElementToEndOfArray() {
  endarray = [...array, element]
  return endarray
}

function destructivelyAddElementToEndOfArray() {
  array = [...aray, element]
  return array
}
