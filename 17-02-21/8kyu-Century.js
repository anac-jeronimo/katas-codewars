// 8kyu - Century From Year
// https://www.codewars.com/kata/5ad0d8356165e63c140014d4
function century(year) {
  const century = Math.floor(year / 100);
  const decade = year % 100;

  if (decade > 0) {
    return century + 1;
  }
  return century;
}

/* function century(year) {
  return year % 100 > 0 ? Math.floor(year / 100) + 1 : Math.floor(year / 100);
} */