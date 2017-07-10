function bubbleSort (arr) {
  if (arr.length <= 1) return arr

  for (var i = arr.length; i > 0; i--) {
    for (var j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(j, j + 1, arr)
      }
    }
  }
  return arr
}

function swap (a, b, arr) {
  var temp = arr[b]
  arr[b] = arr[a]
  arr[a] = temp
}
