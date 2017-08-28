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

function addElementToEndOfArray(array, element) {
  endarray = [...array, element]
  return endarray
}

function destructivelyAddElementToEndOfArray(array, element) {
  array = [...array, element]
  return array
}

function accessElementInArray(array, index) {
  return array[index]
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
    return array.shift()
}