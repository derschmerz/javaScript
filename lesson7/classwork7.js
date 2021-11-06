// const arr1 = new Array (4, 5, 66, 8, 9)
// console.log(arr1.length);
// console.log(arr2.length)
// const arr2 = new Array (4)

// const arr3 = [1, 2, 3, 4];

// console.log(arr3);

// arr3[0] = 10;

// console.log(arr3);

/*  length */

// const arr = []
// console.log(arr);

// arr[0] = "ноль";
// console.log(arr);

// arr[10] = 'десять';
// console.log(arr.length);

/* push */

// const arr = []
// arr.push(1)
// arr.push(10)

// console.log(arr)

/* filter */

// const data = [{title: "first", writer: "Alex"},
//     {title: "first", writer: "Alex"},
//     {title: "first", writer: "ivan"},
//     {title: "first", writer: "MAX"},
//     {title: "first", writer: "Ivan"},
//     {title: "first", writer: "Alex"},
//     {title: "first", writer: "Alex"}

// ];
// console.log(data);

// const filterData = data.filter((el) => el.writer === 'Alex')

// console.log(filterData);

/* map */

// добавили индекс

// const newData = data.map((el,i) => {
//     el.index = i;
//     return el
// })

// console.log(newData)

// const newData = data.map((el) => el.title) /* массив тайтлов */

// console.log(newData)

/* forEach */

// const testForEach = data.forEach((el) => console.log(el.title))
// console.log(testForEach)

/* reduce */

// const data = [
//     { value: 2, month: 'январь'},
//     { value: 3, month: 'февраль'},
//     { value: 5, month: 'март'},
//     ];

// const valueSum = data.reduce((acum, curValue) => acum + curValue.value, 0);
// console.log(valueSum);

/* практика */

/* Написать функцию, которая будет принимать массив чисел, 
содержащий целые положительные и целые отрицательные числа,
 в качестве результата возвращать сумму четных положительных элементов переданного массива. */

// let arr = [1, 2, 3, -4, -44, 90];

// const Sum = arr
// .filter((el) => el > 0 && el % 2 === 0)
// .reduce((acum, curSum) => acum + curSum, 0);
// console.log(Sum);

/* Написать функцию, которая будет принимать массив чисел, 
и будет убирать повторяющиеся значения из переданного массива,
 в качестве результата возвращать новый массив с уникальными значениями из исходного. */

//  let arr = [1, 2, 3, -4, -44, 90, 3, 2];
// // let mapArr = arr.map(el) => (el.includes != el[i])

// // console.log(mapArr)

// const uniqArr = (arr) => {
// const result =[]
// for (let i = 0; i < arr.length; i+=1)
//     if(!result.includes(arr[i])){
//          result.push(arr[i])
//     }
//     return result
// }
// console.log(uniqArr(arr));

/* Написать функцию  которая будет принимать два массива,
 и будет сравнивать их, если они идентичны (элементы совпадают по значению и по индексу)
  то функция возвращает true, в противном случае false. */

// let arr1 = [1, 2, 3, -4, -44, 90, 3, 2];
// let arr2 = [1, 2, 3, -4, -44, 90, 3, 2];

// const isEqualArr = (arr1, arr2) => {
//   if (arr1.length !== arr2.length) {
//     return false;
//   }
//   return !arr1.map((el, i) => el === arr2[i]).includes(false);
// };
// console.log(isEqualArr(arr1, arr2));

