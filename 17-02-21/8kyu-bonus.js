// 8 kyu - Do I get a bonus
// https://www.codewars.com/kata/56f6ad906b88de513f000d96

function bonusTime(salary, bonus) {
  if (bonus) {
    return "£" + salary * 10;
  }
  return "£" + salary;
}
