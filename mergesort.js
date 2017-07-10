function split (wholeArray) {
  var middle = Math.floor(wholeArray.length / 2)
  return [wholeArray.slice(0, middle), wholeArray.slice(middle)]
}

function merge (arr1, arr2) {

  var ret = [], arr1pt = 0, arr2pt = 0
  while (arr1pt < arr1.length && arr2pt < arr2.length) {
    if (arr1[arr1pt] < arr2[arr2pt]) {
      ret.push(arr1[arr1pt++])
    } else {
      ret.push(arr2[arr2pt++])
    }
  }
  return ret.concat(arr1.slice(arr1pt)).concat(arr2.slice(arr2pt))
}

function mergeSort (array) {
  if (array.length <= 1) return array

  return merge(
    mergeSort(split(array)[0]),
    mergeSort(split(array)[1])
  )
}

