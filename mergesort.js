function split(wholeArray) {

    /* your code here to define the firstHalf and secondHalf arrays */
    const firstHalf = wholeArray.slice(0,Math.round(wholeArray.length/2))
    const secondHalf = wholeArray.slice(Math.round(wholeArray.length/2))

    return [firstHalf, secondHalf];
  }

  function merge (left, right) {
    let resultArray = [], leftIndex = 0, rightIndex = 0;
  
    // We will concatenate values into the resultArray in order
    while (leftIndex < left.length && rightIndex < right.length) {
      if (left[leftIndex] < right[rightIndex]) {
        resultArray.push(left[leftIndex]);
        leftIndex++; // move left array cursor
      } else {
        resultArray.push(right[rightIndex]);
        rightIndex++; // move right array cursor
      }
    }
  
    // We need to concat here because there will be one element remaining
    // from either left OR the right
    return resultArray
            .concat(left.slice(leftIndex))
            .concat(right.slice(rightIndex));
  }

function mergeSort(array) {
 if (array.length <= 1) {
  return array
 }
  const splitFunc = split(array);
  return merge(
    mergeSort(splitFunc[0]), mergeSort(splitFunc[1])
  )
}