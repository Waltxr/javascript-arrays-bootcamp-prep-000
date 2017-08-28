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
  const array = array.unshift(element)
  return array
}

function addElementToEndOfArray(array, element) {
  endarray = [...array, element]
  return endarray
}

function destructivelyAddElementToEndOfArray(array, element) {
  return array.push(element)
}

function accessElementInArray(array, index) {
  return array[index]
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
    return array.shift()
}

function removeElementFromBeginningOfArray(array) {
    var slicedarray = array.slice(0)
    return slicedarray
}

function destructivelyRemoveElementFromEndOfArray(array) {
  return array.pop()
}

function removeElementFromEndOfArray(array) {
  return array.slice(0 , array.length - 1)
}
