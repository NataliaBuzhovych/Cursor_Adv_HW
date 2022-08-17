let tomato = 15.678;
let champagne = 123.965;
let chesees = 90.2345;
let sum = tomato + champagne + chesees;
let medium = sum / 3;
let discount = Math.random().toFixed(2);
let sumAfterdiscount = (sum - sum * discount).toFixed(2);
let answer = `
Мінімальне число: ${Math.min(tomato, champagne, chesees)};
Максимальне число: ${Math.max(tomato, champagne, chesees)};
Вартість всіх товарів: ${sum};
Сума цілих частин кожного товару: ${Math.floor(tomato) + Math.floor(champagne) + Math.floor(chesees)};
Суму товарів округлену до сотень: ${Math.round(sum / 100) * 100};
Сума решти: ${500 - sum};
Середнє значення цін: ${medium.toFixed(2)}git;
Сума до оплати після знижки: ${sumAfterdiscount};
Чистий прибуток: ${Math.round(sum/2 - sumAfterdiscount)};
`

console.log(answer);

if (Math.floor(sum) % 2 == 0){
    console.log('Парне число');
} else {
    console.log('Непарне число');
}


