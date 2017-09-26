function getAllNumbersBetween(startIndex, stopIndex, threeCallback, fiveCallback) {
  let numbers = [];
  for (let i = startIndex; i <= stopIndex; i++) {
    numbers.push(i);
  }
    console.log(numbers);
  for (let i = 0; i < numbers.length; i++){
      if (numbers[i] % 3==0 && numbers[i] % 5 ==0){
          console.log(threeCallback + "," + fiveCallback);
      }
      if (numbers[i] % 5==0){
          console.log(fiveCallback);
      }
      if (numbers[i] % 3 ==0){
          console.log(threeCallback);
      }
  }
  }
getAllNumbersBetween(6, 15, "sayThree", "sayFive");


