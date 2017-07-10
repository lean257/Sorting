describe('Bubble Sort', function () {
  beforeEach(function () {
    spyOn(window, 'swap').and.callThrough() // replace existing `tootsiepop['lick']` method
  })

  it('handles an empty array', function () {
    expect(bubbleSort([])).toEqual([])
  })

  it('if it has 1 item, return same array', function () {
    expect(bubbleSort([5])).toEqual([5])
  })

  it('sorts an array of 2 items correctly', function () {
    expect(bubbleSort([5, 2])).toEqual([2, 5])
    expect(swap.calls.count()).toEqual(1)
  })

  it('sorts a large array', function () {
    expect(bubbleSort([23, 42, 4, 15, 16, 8])).toEqual([4, 8, 15, 16, 23, 42])
  })

  it('works for worst peformance case ', function () {
    expect(bubbleSort([42, 23, 16, 15, 8, 4])).toEqual([4, 8, 15, 16, 23, 42])
  })

  it('works for random array', function () {
    var arr = Array(Math.floor(Math.random() * 25))
    for (var i = 0; i < arr.length; i++) {
      arr[i] = Math.floor(Math.random() * 200)
    }

    expect(bubbleSort(arr)).toEqual(arr.sort((a, b) => a - b))
  })
})
