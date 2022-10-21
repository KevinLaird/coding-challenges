const string1 = 'ABCA';
const string2 = 'BCAB';
const string3 = 'ABC';

const firstRecurringCharacter = (stringInput) => {
  const mySet = new Set();

  for (let char of stringInput) {
    if (mySet.has(char)) {
      return char;
    } else {
      mySet.add(char);
    }
  }
  return false;
};

console.log(firstRecurringCharacter(string1));
console.log(firstRecurringCharacter(string2));
console.log(firstRecurringCharacter(string3));
