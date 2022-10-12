function getRandomArray(length, min, max) {
  const newArray = [];
  for (let i = 0; i < length; i++) {
    newArray[i] = Math.floor(Math.random() * (max - min)) + min;
  }
  return newArray;
}
// console.log(getRandomArray(4, 10, 20));

export function getModa(...numbers) {
  let counts = {};
  let arrayInteger = numbers.filter((el) => el % 1 == 0);
  arrayInteger.forEach((el) => {
    counts[el] = (counts[el] || 0) + 1;
  });

  let maxValue = 0;
  let maxKey = "";

  for (let key in counts) {
    const value = counts[key];
    if (value >= maxValue && Number(key)) {
      maxValue = value;
      maxKey = key;
    }
  }

  return maxKey;
  return counts;
}
// console.log(getModa(1, 5, 6, 4, 5, 6, 7, 5));

function getAverage(...numbers) {
  let arrayInteger = numbers.filter((el) => el % 1 == 0);
  return arrayInteger.reduce((acc, e) => acc + e) / arrayInteger.length;
}
// console.log(getAverage(2, 4.5, 6, 7, 5.5, 5));

function getMedian(...numbers) {
  let arrayInteger = numbers
    .filter((el) => el % 1 == 0)
    .sort((a, b) => {
      return a - b;
    });
  let length = arrayInteger.length;
  if (arrayInteger.length % 2 == 0) {
    return (arrayInteger[length / 2 - 1] + arrayInteger[length / 2]) / 2;
  } else {
    return arrayInteger[(length - 1) / 2];
  }
}
// console.log(getMedian(15, 16, 1, 27, 6.6, 2.1, 11, 25, 3));

function filterEvenNumbers(...numbers) {
  let oddNumbers = numbers.filter((el) => !(el % 2 == 0));
  return oddNumbers;
}
// console.log(filterEvenNumbers(3, 5, 6, 8, 2, 9, 1, 3));

function countPositiveNumbers(...numbers) {
  const count = numbers.filter((e) => e >= 0).length;
  return count;
}
// console.log(countPositiveNumbers(1, -2, 3, -4, -5, 6, -6, 5, 8, 9, 3.5));

function getDividedByFive(...numbers) {
  let arrayNumbersDividedByFive = numbers.filter((el) => el % 5 == 0);
  return arrayNumbersDividedByFive;
}
// console.log(
//   getDividedByFive(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2)
// );

function divideByThree(word) {
  let wordArr = word.replaceAll(" ", "").toLowerCase().split("");
  let result = [];
  let threeEl = "";

  wordArr.map((el) => {
    threeEl += el;
    if (threeEl.length == 3) {
      result.push(threeEl);
      threeEl = "";
    }
  });
  if (threeEl < 3) {
    result.push(threeEl);
  }
  return result;
}
// console.log(divideByThree("Vbm Dkjf nNcv"));
