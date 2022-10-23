// let startingValue = 0
// const returnArray = [0, 1]

// const day0 = 0
const days = [0, 1, 3, -5, -10, 2, 0];
const days2 = [0, -1, 54, -5, -6, -7, -8];
const days3 = [50, -1, -1, -1, -1, -1, -1];
const days4 = [0];

[0, 2, -5, 40];

// local minima
// negative => positive

// local maxima
// positive => negative

// 0 + 1 = 1
// startingValue < newValue => startingValue = newValue
// returnArray = [i, j]
// 0 + 1 + 3 = 4
// 0 + 1 + 3 - 5 = -1
// 0 + 1 + 3 - 5 + 1 = 0
// 0 + 1 + 3 - 5 + 1 + 2 = 2
// 0 + 1 + 3 - 5 + 1 + 2 - 10 = -8
// 0 + 1 + 3 - 5 + 1 + 2 - 10 + 2 = -6
// 0 + 1 + 3 - 5 + 1 + 2 - 10 + 2 + 0 = -6

// Day 1
// Cost = 1
// Profit = -1

const calculateMaxProfit = (days) => {
  if (days.length === 1) {
    return [days[0]];
  }
  let maxProfit = days[0] + days[1];
  let returnValue = [0, 1];

  for (i = 0; i < days.length; i++) {
    let profit = days[i];
    for (j = i + 1; j < days.length; j++) {
      profit += days[j];
      if (profit > maxProfit) {
        maxProfit = profit;
        returnValue = [i, j];
      }
    }
  }
  return returnValue;
};

console.log(calculateMaxProfit(days4));
