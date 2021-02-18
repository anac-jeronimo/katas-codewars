// 7 kyu - Mumbling
//more than one way of solving
// https://www.codewars.com/kata/5667e8f4e3f572a8f2000039

function accum(input) {
  // a place to store the result
  let result = "";
  // iterate over the string
  for (let i = 0; i < input.length; i++) {
    //append the current letter i+1 times to the string
    for (let k = 0; k < i + 1; k++) {
      //capitalize the first append
      if (k === 0) {
        result += input[i].toUpperCase();
      } else {
        result += input[i].toLowerCase();
      }
    }
    //append a dash if it is not the last letter
    if (i != input.length - 1) {
      result += "-";
    }
  }
  return result;
}

//(i) is the first iteration, (k) is the inner iteration, to check if we need to append letters or not. 

 ////////////////////////////////////////////////////////////////////////////////////////

function accum(input) {
  // a place to store the result
  let result = "";
  // iterate over the string
  input.split("").forEach((currentLetter, index) => {
    const totalCount = index + 1;
    for (let counter = 0; counter < totalCount; counter++) {
      //capitalize the first append
      if (counter === 0) {
        result += currentLetter.toUpperCase();
      } else {
        result += currentLetter.toLowerCase();
      }
    }
      //append a dash if it is not the last letter
      if (index != input.length - 1) {
        result += "-";
      }
    
  });
    return result;
 
};
 ////////////////////////////////////////////////////////////////////////////////////////


function accum(input) {

  // iterate over the string
  return input.split("").reduce((result, currentLetter , index) => {
    const totalCount = index + 1;
    for (let counter = 0; counter < totalCount; counter++) {
      //capitalize the first append
      if (counter === 0) {
        result += currentLetter.toUpperCase();
      } else {
        result += currentLetter.toLowerCase();
      }

      //append a dash if it is not the last letter
      if (index != input.length - 1) {
        result += "-";
      }
    }
    return result;
  }, '');
};


//////////////////////////////////////////////////////////////////////////////////////////////

function accum(s) {
  return s
    .split("")
    .map((item, index) => item.toUpperCase() + item.toLowerCase().repeat(index))
    .join("-");
}
  
