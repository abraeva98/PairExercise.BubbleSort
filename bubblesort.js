
let bubbleSort = (inputArr) => {
  let len = inputArr.length;
  for (let i = 0; i < len; i++) {
      for (let j = 0; j < len; j++) {
  
           swap(inputArr, j)
           
      }
  }
//  console.log(num)
  return inputArr;

};

let swap = (inputArr, index) => {
  if (inputArr[index] > inputArr[index + 1]) {
    let tmp = inputArr[index];
    inputArr[index] = inputArr[index + 1];
    inputArr[index + 1] = tmp;
    return inputArr     
  }
}

