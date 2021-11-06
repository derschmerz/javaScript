// const obj1 = {a: "hello"};

// const obj2 = Object.assign({},obj1)
// console.log(obj1, obj2);
// obj1.a = "goodbye"
// console.log(obj1, obj2);

// const obj1 = {sayHello: 'Hello',
// user: {name: 'Alex', age: {date: 28, year: 1996, month: "03"}},

// };

// // const obj2 = Object.assign({}, obj1)
// const obj2 = JSON.parse(JSON.stringify(obj1));
// console.log(obj1, obj2);

// obj1.user.age.year = "2021"
// console.log(obj1.user, obj2.user);

// const arr1 = [1, 2, 3, 4];
// const arr2 = [7, 8, 9];
// const arr3 = [...arr1,5 ,6 ,...arr2];

// console.log(arr3);

// const obj1 = {name: 'Alex', age: '25'};
// const obj2 = { ...obj1, name:'Max'};

// console.log(obj1,obj2);

// obj1.name = 'IVAN'
// console.log(obj1, obj2);

// const getSum = (...args) => {
//   console.log(args);
// };
// getSum(1,2,3,4)

/* for of */

// const arr1 = [1, 2, 3, 4]

// for (let elem of arr1) {
//     console.log(elem);
// }
// /* тоже самое что */
// for (let i = 0; i < arr1.length; i+=1) {
//     console.log(arr1[i])}

/*  for in */
// const obj = {a:1, b:2}
// for (let elem in obj) {
//     console.log(elem);
// }

/* Практика */

// let obj1 = { name: "Ritusik", age: "30", key: "230" };
// // let obj2 = Object.assign({}, obj1)

// // obj2.key = 280
// // console.log(obj1, obj2);

// let obj2 = { key: "33",...obj1 };
// console.log(obj1, obj2);

/* 2 */

/* const someArgs = (...args) => {
  let result = 0;
  for (elem of args) {
    if (elem % 2 === 0) {result += elem;
  }
};
console.log(someArgs(12, 23, 1, -99)); */

// const arr3 = [1, 2, 3, 4];
// const arr4 = [1, 4, 9];

// const getCommonValue = (arr1,arr2) => {
//     const result = []
// for (i = 0; i < arr1.length; i+=1) {
//     if (arr2.includes(arr1[i])&& !result.includes(arr1[i])){
//         result.push(arr1[i])
//     }

// }
// return result
// }
// console.log(getCommonValue(arr3,arr4));

/* this */

// var name = 'Alex';
// function example() {
//     console.log(this);
// }
// example();

// console.log(globalThis);

// function getName() {
//   console.log(this.name);
// }
// function setName(newName) {
//   this.name = newName;
// }
// const user = {
//   name: "Alex",
//   age: "25",
//   getUserName: getName,
//   setUserName: setName,
// };
// user.getUserName();

// const admin = {
//   name: "Max",
//   age: "45",
//   getAdminName: getName,
//   setAdminName: setName,
// };

// admin.getAdminName();
// user.getUserName();


// user.setUserName ('ira')
// console.log(user);

// function example() {console.log(this);}

// const testObject = {
//     name: 'alex',
//     testMethod: example,
//     name2: 'alex2',
// }

// testObject.testMethod()

// getHeroName = function

// function startFight () {
//     return this.strange * this.agility;
// } 

// const hero = {
// name: "Jon",
// strange: 20, 
// agility:10,
// health:100,
// fight: startFight
// }
// const dracula = {
//     name: "Vlad",
// strange: 50, 
// agility:7,
// health:1000,
// fight: startFight
// }
// console.log(hero.fight(), dracula.fight());

// if (hero.fight()>dracula.fight()) {
//     console.log("hero win!");
// } else {
//     console.log('tebe pizda, begi');
// }


// const startFight = () => {
//     return this.strange * this.agility;
// } 

// const hero = {
// name: "Jon",
// strange: 20, 
// agility:10,
// health:100,
// fight: startFight
// }
// const dracula = {
//     name: "Vlad",
// strange: 50, 
// agility:7,
// health:1000,
// fight: startFight
// }
// console.log(hero.fight(), dracula.fight());

// if (hero.fight()>dracula.fight()) {
//     console.log("hero win!");
// } else {
//     console.log('wasted');
// }

// const sity = {
//     name: "Dresvishi",
//     district: "Nizhny Novgorod",
//     location: "Gorky Sea",
//     population: 100,
//     tourists: 3,
//     getSityName: function getName() {
//         return this.name;
//       },
//     getSityPopulation: function getPopulation() {
//         return this.population;
//       },
//     setSomeValue: function(key, value) {
//           this[key] = value;
//       }
// }
// console.log(sity);
// sity.setSomeValue("name", "paris")
// sity.setSomeValue("population", "10 mln")
// console.log(sity);

// console.log(sity.getSityName());
// console.log(sity.getSityPopulation());





// function getName() {
//   return this.name;
// }


// function getPopulation() {
//     return this.population;
//   }

