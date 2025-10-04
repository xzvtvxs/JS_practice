// **************************TASK 3**************************
// Напишіть функцію caclculateAverage(),
// яка приймає довільну кількість
// аргументів і повертає їхнє середнє значення.
// Додайте перевірку, що аргументи - це числа.


// function calculateAverage(...args) {
//     let sum = 0;
//     let count = 0;
//     for (const arg of args) {
//         if (typeof arg === 'number') {
//             sum += arg;
//             count += 1;
//         }
//     }
//     return sum / count;

// }

// console.log(calculateAverage(5, 10, 15));

// *************************** TASK 2 **********************
// Напишіть функцію checkLogin(array), яка:
// Приймає масив логінів як аргумент.
// Запитує ім'я користувача через prompt.
// Перевіряє, чи є введене ім'я у переданому масиві.
// Якщо ім'я є в масиві – виводить повідомлення через alert: "Welcome, <name>!"
// Якщо ім'я відсутнє – виводить повідомлення: "User not found".

// const logins = ["Peter", "John", "Igor", "Sasha"];

// console.log(checkLogin(logins));
// function checkLogin(array) {
//     const userName = prompt('Введите ваше имя');
//     if (array.includes(userName)) {
//        return alert(`Welcome, ${userName}!`);
//     }
//     return alert("User not found");
// }

// ***********************task 4******************************
// Напишіть функцію, яка сумуватиме сусідні числа
// і пушитиме їх в новий масив.

// const someArr = [22, 11, 34, 5, 12, 13, 14, 15];

// уточнення: складати необхідно перше число з другим, потім друге - з третім,
// третє - з четвертим і так до кінця.
// В результаті функція має повертати масив [33, 45, 39, 17, 25, 27, 29].
// const someArr = [22, 11, 34, 5, 12, 13, 14, 15];

// function sumSiblingNum(someArr) {
//     const newArr = [];
//     for (let i = 0; i < someArr.length -1; i++) {
//         const sum = someArr[i] + someArr[i + 1];
//         newArr.push(sum);
//     }
//     return newArr;

// };

// console.log(sumSiblingNum(someArr));

// *************************TASK 5***********************

// Напишіть функцію findSmallestNumber(numbers),
// яка шукає найменше число в масиві.
// Додайте перевірку, що функція отримує саме масив, і
// якщо функція отримує масив - поверніть з функції найменше число,
// в іншому випадку - поверніть 'Sory, it is not an array!'.

// const numbers = [2, 5, 35, 56, 12, 24, 7, 80, 3, 1];

// function findSmallestNumber(numbers) {
//     if (!Array.isArray(numbers)) {
//         return 'Sory, it is not an array!';

//     }
//     let smollestElement = numbers[0];
//     for (const number of numbers) {
//         if (smollestElement > number) {
//         smollestElement = number
//     }
//     }
//     return smollestElement;
// }
// console.log(findSmallestNumber(numbers));

// **************************TASK 9************************

// Створіть об'єкт calculator з наступними методами:
// read(a, b) - приймає два аргумента і зберігає їх як властивості об'єкта,
// sum() - повертає сумму збереженних значень (з перевіркою на наявність властивостей в об'єкті),
// mult() - перемножає збереженні значення і повертає результат (з перевіркою на наявність властивостей в об'єкті),
// винесіть перевірку на наявність властивостей в об'єкті в окремий метод exist().

// Якщо вказані властивості в обʼєкті відсутні (тобто метод exist повертає false),
// методи sum і mult мають повертати рядок 'No such propeties'

// const calculator = {
//   read(a, b) {
//     this.a = a;
//     this.b = b;
//   },
//   sum() {
//     if (this.exist()) {
//       return this.a + this.b;
//     }
//     return 'No such propeties';
//   },
//   mult() {
//     if (this.exist()) {
//       return this.a * this.b;
//     }
//     return 'No such propeties';
//   },
//   exist() {
//     if (this.a === undefined || this.b === undefined) {
//       return false;
//     }
//     return true;
//   },
// };
// console.log(calculator.read(5, 10));
// console.log(calculator.sum());
// console.log(calculator.mult());
