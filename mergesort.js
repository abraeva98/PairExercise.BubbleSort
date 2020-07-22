function split(wholeArray) {

    /* your code here to define the firstHalf and secondHalf arrays */
    const firstHalf = wholeArray.slice(0,Math.round(wholeArray.length/2))
    const secondHalf = wholeArray.slice(Math.round(wholeArray.length/2))

    return [firstHalf, secondHalf];
  }

function merge (arr1, arr2) {
    return [...arr1, ...arr2].sort()
    }
