// 7kyu Binary Addition
// https://www.codewars.com/kata/551f37452ff852b7bd000139



function addBinary(a, b) {
    const sum = a + b;

    return toBinary(sum);  
}

function toBinary(sum) {
    if (sum === 0) {
        return '0';
    }

    let binary = '';
    while(sum > 0) {
        const remainder = sum % 2;
        binary = remainder + binary;
        sum = Math.floor(sum / 2);
    }

    return binary;
}


////////////////////////////

const addBinary = (a, b) => (a + b).toString(2);

////////////////////////////////
function addBinary(a, b) {
  return (a + b).toString(2);
}