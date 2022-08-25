
let minNumber = Number(prompt("Введіть ціле додатнє число M, з якого починається сумування",));
while (!(minNumber % 1 == 0) || (minNumber == "") || (minNumber < 0)) {
    alert("Ви ввели число, яке не задовільняє умову");
    minNumber = +prompt("Введіть ціле додатнє число M, з якого починається сумування",);
}
let maxNumber = +prompt("Введіть ціле додатнє число N, яким закінчується сумування",);
while (!(maxNumber % 1 == 0) || (maxNumber == "") || (maxNumber < 0)) {
    alert("Ви ввели число, яке не задовільняє умову");
    maxNumber = +prompt("Введіть ціле додатнє число N, яким закінчується сумування",);
  
}
while (minNumber > maxNumber) {
    alert('Не можливо зсдійснити сумування. Перше число має бути меншим ніж друге число.');
    minNumber = +prompt("Введіть ціле додатнє число M, з якого починається сумування",);
    maxNumber = +prompt("Введіть ціле додатнє число N, яким закінчується сумування",);  
}

let sumNumbers = 0;

if (confirm('Чи потрібно пропускати парні числа?')) {
    for (let i = minNumber; i <= maxNumber; i++) {
    if (!(i % 2 == 0)) {
        sumNumbers += i;
    }
    }
} else {
       for (let i = minNumber; i <= maxNumber; i++) {
        sumNumbers += i;
    }
}; 
document.writeln(`Сума всіх цифр становить: ${sumNumbers}`);


