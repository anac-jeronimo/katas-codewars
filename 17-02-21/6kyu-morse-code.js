// 6 Kyu - Decode the morse code
// https://www.codewars.com/kata/54b724efac3d5402db00065e

decodeMorse = function (morseCode) {
  return morseCode
    .split("   ")
    .map((word) =>
      word
        .split(" ")
        .map(code => MORSE_CODE[code] || "")
        .join("")
    )
    .join(" ").trim();
};


/////////////////////

decodeMorse = function (morseCode) {
    //splits words at 3 spaces
  return morseCode.split("   ").map(word => {
      //split word into indeividual letter/codes
      return word.split(" ").map(code =>  {
        //convert code to letter/digital/symbol
        return MORSE_CODE[code] || "";
      }).join('') ; //join letters into a single word
  }).join(" ").trim();  // join all the words into a single sentence
};


//////////////////////////////////

decodeMorse = function (morseCode) {
  return morseCode
    .split("   ")
    .map((codedWord) => {
      return codedWord.split(" ").reduce((word, code) => {
        return word + (MORSE_CODE[code] || "");
      }, "");
    })
    .join(" ")
    .trim();
};


////////////////////////////////////////////////

decodeMorse = function(morseCode) {
    return morseCode.split('   '),reduce((sentence, codedWord, index, codedWordArray) => {
        return sentence + codedWord.split(' ').reduce((word, code) => {
            return word + (MORSE_CODE[code] || '');
        }, '') + (index < codedWordArray.length - 1 ? ' ' : '');
    }, '').trim();
}