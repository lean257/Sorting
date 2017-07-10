describe('Merge Sort', function () {
  it('if it has 1 item, return same array', function () {
    expect(mergeSort([5])).toEqual([5])
  })

  it('sorts an array of 2 items correctly', function () {
    expect(mergeSort([5, 2])).toEqual([2, 5])
  })

  it('sorts a large array', function () {
    expect(mergeSort([23, 42, 4, 15, 16, 8])).toEqual([4, 8, 15, 16, 23, 42])
  })

  it('works for worst peformance case', function () {
    expect(mergeSort([42, 23, 16, 15, 8, 4])).toEqual([4, 8, 15, 16, 23, 42])
  })

  it('works for random array', function () {
    var arr = Array(Math.floor(Math.random() * 25))
    for (var i = 0; i < arr.length; i++) {
      arr[i] = Math.floor(Math.random() * 200)
    }

    expect(mergeSort(arr)).toEqual(arr.sort((a, b) => a - b))
  })
})
