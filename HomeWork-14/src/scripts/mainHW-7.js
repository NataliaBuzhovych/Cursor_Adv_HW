const ukraine = { tax: 0.195, middleSalary: 1789, vacancies: 11476 };

const latvia = { tax: 0.25, middleSalary: 1586, vacancies: 3921 };

const litva = { tax: 0.15, middleSalary: 1509, vacancies: 1114 };

function getMyTaxes(salary) {
  return salary - this.tax * salary;
}
// console.log(getMyTaxes.call(ukraine, 1000));

export function getMiddleTaxes() {
  return this.tax * this.middleSalary;
}

// console.log(getMiddleTaxes.call(ukraine));

function getTotalTaxes() {
  return this.tax * this.middleSalary * this.vacancies;
}
// console.log(getTotalTaxes.call(litva));

function getMySalary() {
  const salary = Math.floor(Math.random() * 500) + 1500;
  const taxes = Math.round(salary * this.tax);
  const profit = salary - taxes;
  let mySalary = {
    salary,
    taxes,
    profit,
  };
  // console.log(mySalary);
}
// let interval = setInterval(() => getMySalary.call(latvia), 10000);
