function getMaxDigit(number) {
    let arr = [...'' + number];
    let maxDigit = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > maxDigit) {
            maxDigit = arr[i];
        }
    }
    return maxDigit;
}
console.log(`Найбільша цифра у числі 125348895632 становить: ${getMaxDigit(125348895632)}`)

function power(a,b) {
    let result = a;
    for (let i = 1; i < b; i++){
        result *= a;
    }
    return result;
}
console.log(`Число 3 у 4 степені становить ${power(3,4)}`);

function firtUppercaseWord(word) {
let a = [...'' + word];
a[0] = a[0].toUpperCase();
for (let i = 1; i < a.length; i++){
    a[i] = a[i].toLowerCase();
}
return a.join('');
}
console.log(`Слово "уКРАЇНА" з великої букви - ${firtUppercaseWord('уКРАЇНА')}`);

function getTax(sellary, tax) {
    let sellaryAfterTex = sellary - sellary * (tax / 100);
    return sellaryAfterTex;
}
console.log(`Заробітня оплата 1000 після податку 19,5% становить ${getTax(1000,19.5)}`);

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
console.log(`Рандомне число в діапазоні від 10 до 45 виходить ${getRandomNumber(10, 45)}`);

function countLetter(word,letter) {
    let wordArray = [...'' + word];
    let counter = 0;
    for (let i = 0; i < wordArray.length; i++) {
        if (wordArray[i].toLocaleLowerCase() == letter.toLowerCase()) {
            counter += 1;
        }
    }
    return counter;
}
console.log(`Буква "с" появляється в слові "Міссісіпі" - ${countLetter('Міссісіпі','с')}`);

function isPalyndrom(word) {
    return word.toLowerCase() === word.split("").reverse().join("").toLowerCase();
}
console.log(`Чи є слово "Анна"  паліндромом - ${isPalyndrom('anna')}`);



