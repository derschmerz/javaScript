// ЗАДАНИЯ
// Сделайте функцию, которая возвращает квадрат числа. Число передается параметром.
// function func (num) {
//     return num*num
// }
// console.log(func(5));

// Сделайте функцию, которая возвращает сумму двух чисел.
// function sum (num) {
//     return num + num
// }
// console.log(sum(5));

// Сделайте функцию, которая отнимает от первого числа второе и делит на третье.
// function func(num1, num2, num3) {
//   return (num1 - num2) / num3;
// }
// console.log(func(6, 2, 2));

// Сделайте функцию, которая принимает параметром число от 1 до 7, а возвращает день недели на русском языке.
// function day (num){
// switch (num) {
// case 1:
// console.log("понедельник");
// break;
// case 2:
// console.log("Вторник");
// break;
// case 3:
// console.log("Среда");
// break;
// case 4:
// console.log("Четверг");
// break;
// case 5:
// console.log("Пятница");
// break;
// case 6:
// console.log("Суббота");
// break;
// case 7:
// console.log("Воскресенье");
// break;
// default: console.log("введите число от 1 до 7")
// }
// }
// day(8)

// Сделайте функцию, которая параметрами принимает 2 числа. Если эти числа равны - пусть функция вернет true, а если не равны - false.

// const func = (num1, num2) => num1 === num2 ? console.log("true") : console.log("false");
// func(2, 2)

//  Сделайте функцию, которая параметрами принимает 2 числа. Если их сумма больше 10 - пусть вернет true, а если нет то - false.
// const func = (num1, num2) => (num1 + num2) > 10 ? console.log("true") : console.log("false");
// func(20, 2)

//  Сделайте функцию, которая параметром принимает число и проверяет - отрицательное оно или нет. Если отрицательное - пусть функция вернет true, а если нет - false.
// const func = (num1) => (num1) > 0 ? console.log("true") : console.log("false");
// func(2)

//  Сделайте функцию isNumberInRange, которая параметром принимает число и проверяет, что оно больше нуля и меньше 10. Если это так - пусть функция возвращает true, если не так - false.
// let isNumberInRange = (num1) => num1 > 0 && num1 < 10 ? true : false;
// // isNumberInRange(20)

// //  Дан массив с числами. Запишите в новый массив только те числа, которые больше нуля и меньше 10-ти. Для этого используйте вспомогательную функцию isNumberInRange из предыдущей задачи.

// let arr = [1, 2, 3, 4, -5, -56, 77]
// let arr2 = []
// for (i=0;i < arr.length; i++) {
//     if (isNumberInRange(arr[i])) {
//         arr2.push (arr[i])
//     }
// }
// console.log(arr2);

//  Сделайте функцию getDigitsSum (digit - это цифра), которая параметром принимает целое число и возвращает сумму его цифр.

/* let num = 1
let getDigitsSum = (num) => {
    let sum = 0
    num = num.toString();
    for (i=0;i < num.length; i++){
    sum += +num[i]
    }
    return sum
} 
// console.log(getDigitsSum(350)) */

//  Найдите все года от 1 до 2020, сумма цифр которых равна 13. Для этого используйте вспомогательную функцию getDigitsSum из предыдущей задачи.
// for (;num <= 2020; num++) {
//  if (getDigitsSum(num) === 13){
//     console.log(num);
//  }
// }

//  Сделайте функцию isEven() (even - это четный), которая параметром принимает целое число и проверяет: четное оно или нет. Если четное - пусть функция возвращает true, если нечетное - false.

// let isEven = (num) => (!(num % 2) ? true : false);
// console.log(isEven(5));
// console.log(isEven(6));

// //  Дан массив с целыми числами. Создайте из него новый массив, где останутся лежать только четные из этих чисел. Для этого используйте вспомогательную функцию isEven из предыдущей задачи.
// let arr = [1, 2, 3, 4, 5];
// let arr2 = [];
// for (i = 0; i < arr.length; i++) {
//   if (isEven(arr[i])) {
//     arr2.push(arr[i]);
//   }
// }
// console.log(arr2);

//  Сделайте функцию getDivisors, которая параметром принимает число и возвращает массив его делителей (чисел, на которое делится данное число).

// let arr = []
// let getDivisors = (num) =>{
// for (i = 0; i <= num; i++)
//  if (num % i ==0)
//  arr.push(i)

// return arr
// }
// console.log(getDivisors(7))

//  Дан массив с числами. Выведите последовательно его элементы.

/* let arr = [1, 23, 222, 15]
const arrSort = (arr) => {
    const result = [];
    for (i = 0; i < arr.length; i++) {
        if (!i) {
        result[i] = arr[i];
        continue;
    }
    if (arr[i] > result[i - 1]) {
        result[i] = arr[i]
    } else {
        const a = result[i-1]
        result[i-1] = arr[i];
        result [i] = a;
    }
    }
    console.log(result);
}
console.log(arrSort(arr)); */
//  Дано число. Сложите его цифры. Если сумма получилась более 9-ти, опять сложите его цифры. И так, пока сумма не станет однозначным числом (9 и менее).

// let num = 0;
// let getDigitsSum = (num) => {
//   let sum = 0;
//   num = num.toString();
//   for (i = 0; i < num.length; i++) {
//     sum += +num[i];
//   }
//   if (sum > 9) {
//     getDigitsSum(sum);
//   } else {
//     console.log(sum);
//   }

// };
// getDigitsSum(1234);

// const evenNine = (num) => {
//   num = `${num}`;
//   let sum = 0;
//   for (i = 0; i < num.length; i++) {
//     sum += +num[i];
//   }
//   if (sum > 9) {
//     return evenNine(sum);
//   } else {
//     return sum;
//   }
// };
// console.log(evenNine(2478));


