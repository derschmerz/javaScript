// // Используя метод map() напишите код, который получает из массива строк новый массив, содержащий их длины.

// var vegetables = ['Капуста', 'Репа', 'Редиска', 'Морковка'];

// let vegetableLength = vegetables.map(item => {

// return item = item.length

// })

// console.log( vegetableLength ); // 7,4,7,8

// // Имеется массив простых чисел: numbers = [2, 3, 5, 7, 11, 13, 17, 19]. Использую метод reduce() напишите функцию currentSums(numbers),
// // которая возвращает новый массив из такого же числа элементов,
// // в котором на каждой позиции будет находиться сумма элементов массива numbers до этой позиции включительно.

// let numbers = [2, 3, 5, 7, 11, 13, 17];

// function currentSums(numbers) {
//     let result = [];
//     numbers.reduce(function(accum, current,i=0) {
//     return result[i]= accum + current;
// },0);
// return result
// }
// console.log(currentSums(numbers));

// // [2, 2+3, 2+3+5, 2+3+5+7, 2+3+5+7+11, 2+3+5+7+11+13, 2+3+5+7+11+13+17] = [ 2,5,10,17,28,41,58]

// // Напишите код, который получает из массива чисел новый массив, содержащий пары чисел, которые в сумме должны быть равны семи: (0:7), (1:6) и т.д.

// var array = [0, 1, 2, 3, 4, 5, 6, 7];

// function sumSeven(array, sum) {
//   let first = 0;
//   let last = array.length - 1;
//   let result = [];
//   while (first < last) {
//     let s = array[first] + array[last];
//     if (s == sum) {
//       first++;
//       last--;
//       result.push(array[first] + ":" + array[last]);
//     } else {
//       if (s < sum) first++;
//       else last--;
//     }
//   }
//   console.log(result);
// }

// sumSeven(array, 7);

// Перед вами переменная, содержащая строку. Напишите код, создащий массив, который будет состоять из первых букв слов строки str.

// var str = "Каждый охотник желает знать, где сидит фазан.";
// const result = str.split(" ").reduce((acc, cur) => acc + cur[0], "");
// console.log(Array.from(result));
// // [К,о,ж,з,г,с,ф]

// Перед вами переменная, содержащая строку. Напишите код, создащий массив,
// который будет состоять из строк, состоящих из предыдущего, текущего и следующего символа строки str.

// var str = "JavaScript";
// let result = Array.from(str).map(function(item, index) {
//     return str.substring(index - 1, index + 2)
//   });
//   console.log(result);

//  // [Ja,Jav,ava,vaS,aSc,Scr,cri,rip,ipt,pt] */

// Напишите код, преобразующий массив цифр, которые располагаются неупорядоченно, в массив цифр расположенных по убыванию их значений.

// var numerics = [5, 7, 2, 9, 3, 1, 8];

// function foo(numerics) {
//     let newArr = numerics.sort(function (a, b) {
//       return b - a;
//     })
//     return newArr;
// }
// console.log(foo(numerics)); // [9,8,7,5,3,2,1]

// Напишите код, объединяющий три массива цифр, и располагающий цифры, в полученном массиве, в порядке убывания их значений через пробел.

// var a = [1, 2, 3];
// var b = [4, 5, 6];
// var c = [7, 8, 9];
// function getArr(a, b, c) {
//   let newArr = a.concat(b, c);
//   newArr.sort(function (a, b) {
//     return b - a;
//   })
// let arr3 = [newArr.join(' ')]
//   return arr3

// }

// console.log(getArr(a, b, c)); // [9 8 7 6 5 4 3 2 1]

// Дан двухмерный массив с числами, например [[1, 2, 3], [4, 5], [6]]. Найдите сумму элементов этого массива. Массив, конечно же, может быть произвольным. Показать решение.
// let arr = [[1, 2, 3], [4, 5], [6]]

// var result = arr.flat().reduce(function(accum, currernt) {
//   return accum + currernt;
// });
// console.log(result);

// Дан трехмерный массив с числами, например [[[1, 2], [3, 4]], [[5, 6], [7, 8]]]. Найдите сумму элементов этого массива. Массив, конечно же, может быть произвольным.

// let arr = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]]

// var result = arr.flat(Infinity).reduce(function(accum, currernt) {
//   return accum + currernt;
// });
// console.log(result);

// Дан массив с числами. Не используя метода reverse переверните его элементы в обратном порядке.

// let arr = [5, 2, 2, 4, 5, 6, 7]

// function Reverse(arr){
//   var arr2 = [];
//   for (i = 0; i < arr.length; i++){
//      arr2[i] = arr[(arr.length - 1) - i]
//   }
//   return arr2
// }
// console.log(Reverse(arr));

// Дан массив с числами. Узнайте сколько элементов с начала массива надо сложить, чтобы в сумме получилось больше 10-ти.

// let arr = [5, 2, 2, 4, 5, 6, 7];
// let n = 1;
// let sum = arr.reduce(function (accum, current) {

//   if (accum > 10) {
//     return console.log(n);
//   } else {
//     n++;
//     return accum + current;
//   }
// });

// Сделайте функцию arrayFill, которая будет заполнять массив заданными значениями.
// Первым параметром функция принимает значение, которым заполнять массив, а вторым - сколько элементов должно быть в массиве.
// Пример: arrayFill('x', 5) сделает массив ['x', 'x', 'x', 'x', 'x'].

// let arr= [1,0,0,0,0]

// function arrayFill (symb,num){
// arr.fill(symb, 0, num);
// return arr
// }

//  console.log(arrayFill("x", 5))
