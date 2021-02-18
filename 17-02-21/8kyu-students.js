// 8kyu - Students'final grade 
//https://www.codewars.com/kata/5a3fe3dde1ce0e8ed6000097
function finalGrade(exam, projects) {
  if (exam > 90 || projects > 10) {
    return 100;
  }

  if (exam > 75 && projects >= 5) {
    return 90;
  }

  if (exam > 50 && projects >= 2) {
    return 75;
  }

  return 0;
} 
 //to run localy in the git bash inside the folder, write : node <file name>
/* console.log(finalGrade(100, 12) === 100);
console.log(finalGrade(85, 5) === 90); */







