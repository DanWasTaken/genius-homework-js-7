// Створіть функцію-конструктор Calculator, який створює об’єкти з трьома методами:
// read() запитує два значення за допомогою prompt і запам’ятовує їх у
// властивостях об’єкта.
// sum() повертає суму цих властивостей.
// mul() повертає результат множення даних властивостей

// const Calculator = function (firstNum, secondNum) {
//   this.firstNum = firstNum;
//   this.secondNum = secondNum;

//   this.read = function () {
//     firstNum = parseFloat(prompt('Введіть перше число'));
//     secondNum = parseFloat(prompt('Введіть друге число'));
//   }

//   this.sum = function () {
//     return firstNum + secondNum;
//   }

//   this.mul = function () {
//     return firstNum * secondNum;
//   }
// }

// const calculator = new Calculator(0, 0);

// calculator.read();

// alert(calculator.sum());
// alert(calculator.mul());