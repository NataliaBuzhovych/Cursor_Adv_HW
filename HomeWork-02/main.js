function Integer(x) {
    let num = prompt(x,);
    while(!(Number(num) % 1 == 0)) {
        alert("Ви ввели не ціле число.");
        num = prompt(x,);
    } 
    return  Number(num);
}

function isCorrect(minNumber, maxNumber) {
    let check = minNumber < maxNumber;
    if (!check) {
        alert('Не можливо зсдійснити сумування');
    }
    return check;
}

debugger;

let minNumber;
let maxNumber;
do {
    minNumber = Integer("Введіть ціле число M, з якого починається сумування");
    maxNumber = Integer("Введіть ціле число N, яким закінчується сумування");
} while (!isCorrect(minNumber, maxNumber));
let sumOddnNumbers = 0;
let sumAllNumbers = 0;

if (confirm('Чи потрібно пропускати парні числа?')) {
    for (let i = minNumber; i <= maxNumber; i++) {
    if (!(i % 2 == 0)) {
        sumOddnNumbers += i;
    }
    }
    console.log(sumOddnNumbers);
} else {
       for (let i = minNumber; i <= maxNumber; i++) {
        sumAllNumbers += i;
    }
    console.log(sumAllNumbers);
};

