const tomato = 15.678;
const champagne = 123.965;
const chesees = 90.2345;
//Сума всіх товарів
let sum = tomato + champagne + chesees;
//Середнє значення цін
let medium = sum / 3;
//Визначення знижки 
let discount = Math.random().toFixed(2);
//Сума до оплати після знижки
let sumAfterdiscount = (sum - sum * discount).toFixed(2);
//Перевірка на парність та непарність суми
let sumAllproducts = '';
if (Math.floor(sum) % 2 === 0){
   sumAllproducts = 'Парне число';
} else {
   sumAllproducts = 'Непарне число';
}

let answer = `
Мінімальне число: ${Math.min(tomato, champagne, chesees)};
Максимальне число: ${Math.max(tomato, champagne, chesees)};
Вартість всіх товарів: ${sum};
Сума цілих частин кожного товару: ${Math.floor(tomato) + Math.floor(champagne) + Math.floor(chesees)};
Суму товарів округлену до сотень: ${Math.round(sum / 100) * 100};
Сума всіх товарів: ${sumAllproducts};
Сума решти з 500 грн: ${500 - sum};
Середнє значення цін: ${medium.toFixed(2)};
Сума до оплати після знижки: ${sumAfterdiscount};
Чистий прибуток: ${Math.round(sum/2 - sumAfterdiscount)};
`

console.log(answer);




