//* Работа с контекстом

// const sayFullName = function (firstName, lastName) {
//   return `${this.phrase} ${firstName} ${lastName}`;
// };

//  console.log(sayFullName('Alex', 'Shirokov'));

//  console.log(sayFullName.call({phrase: "Hello!"}, "ivan", "smirnov"));

// let boundFullName = sayFullName.bind({ phrase: "bye!" }, "MAx", "Petrov");
// console.log(boundFullName());

// let bound2 = sayFullName.bind({ phrase: "bye!"}, 'Kate')
// console.log(bound2("Petrova"))

//* практика
// const sity = {
//   name: "Dresvishi",
//   district: "Nizhny Novgorod",
//   location: "Gorky Sea",
//   population: 100,
//   tourists: 3,
//   getSityName: function getName() {
//     return this.name;
//   },
//   getSityPopulation: function getPopulation() {
//     return this.population;
//   },
//   setSomeValue: function (key, value) {
//     this[key] = value;
//   },
// };
// console.log(sity);
// sity.setSomeValue("name", "paris")
// sity.setSomeValue("population", "10 mln")
// console.log(sity);

// console.log(sity.getSityName());
// console.log(sity.getSityPopulation());

// const town = {
//   name: "malaya Pizza",
//   population: 130,
// };
// console.log(sity.getSityName.call(town));
// console.log(sity.getSityPopulation.call(town));

// let bound = sity.getSityName.bind({name:"bolshaya Pizza"})
// console.log(bound());

// let bound2 = sity.getSityPopulation.bind({population: 180})
// console.log(bound2());

// let bound3 = sity.setSomeValue.bind(town, "name", "Moscow");
// bound3();
// console.log(town);

// function test() {
//     const a=0;
//     console.log(a);
//     console.log(this);
// }
// test()

// const bound = test.bind({a:10});
// bound()

//? Замыкание

// function getFullName() {
//     const firstName = 'Alex';
//     function getSecondName (secondName) {
//         return `${firstName} ${secondName}`
//     }
//     return getSecondName;
// }
// // console.log(getFullName());

// const clouser = getFullName();
// console.log(clouser("Smirnov"));

// const getArea = (a) => {

//   return (b) => a * b;
// };
// const areaWithTen = getArea(10);

// console.log(areaWithTen(5));
// console.log(areaWithTen(10))

// const areaWithFour = getArea(4)

// console.log(areaWithFour(3));

// const getVolume = (a) => {

//   return (b, c) => a * b * c;
// };
// const volumeTen = getVolume(10);

// console.log(volumeTen(4, 4));

// const getVolume = () => {
//     const a = 10;
//     return (b, c) => a * b * c;
//   };
//   const volumeTen = getVolume();

//   console.log(volumeTen(4, 4));

//? Прототипы

// const people = {
//   getName: function () {
//     return this.name;
//   },
// };

// const user = {
//   name: "Alex",
//   __proto__: people,
// };

// const admin = {
//   name: "Vasya",
//   __proto__: people,
// };

// // console.log(people.getName());
// console.log(user.getName());

// let animal = {
//   jumps: "Прыжок",
// };
// let rabbit = {
//   __proto__: animal,
//   jumps: "Заяц прыгнул!",
// };
// console.log(rabbit.jumps);

// delete rabbit.jumps;

// console.log(rabbit.jumps);

// delete animal.jumps;

// console.log(rabbit.jumps);

// let obj = {}
//  console.log(obj);

// function CreateUser(name, age) {
//   this.userName = name;
//   this.userAge = age;
// //   this.sayHi = function(){
// //       return `hello my name is ${this.userName}`;
// //   }
// }

// const userOne = new CreateUser('Alex', 25)
// const userTwo = new CreateUser('Max', 30)

// // const user = new CreateUser();
// // console.log(user);

// console.log(userOne);
// console.log(userTwo);
// // console.log(userOne.sayHi());

// CreateUser.prototype.sayHi = function(){
//     return `hello my name is ${this.userName}`;
// }

// console.log(userTwo.sayHi());

//* Реализовать функцию конструктор для создания открыток.
//*  Функция должна создавать объект открытки со свойствами from, to и метод show().
//*   Метод должен возвращать строку в которой будут указаны значения свойств  from и to.
//* Добавить в prototype создаваемого объекта метод заменяющий текущее значение
//* свойства from на новое переданное значение.

// function CreateCard(from, to) {
//   this.cardFrom = from;
//   this.cardTo = to;

//   this.show = function () {
//     console.log(`this card from ${this.cardFrom} + to ${this.cardTo}`);
//   };
// }

// const card1 = new CreateCard("Grisha", "Kate");

// card1.show();

// CreateCard.prototype.cangeFrom = function (newFrom) {
//   return this.cardFrom = newFrom;
// };

// card1.cangeFrom("Rita");
// card1.show()

//*2й вариант
// function CreateCard(from, to) {
//     this.from = from;
//     this.to = to;

// }

// const firstCard = new CreateCard('Alex',"ivan")
// console.log(firstCard);

// CreateCard.prototype.show = function () {
//     console.log(`${this.from} отправил открытку ${this.to}`);
// }

// firstCard.show()

// CreateCard.prototype.setFromValue = function (newFrom) {
//     this.from = newFrom
// }
// firstCard.setFromValue("max")
// console.log(firstCard);
// firstCard.show()

// class Parent {
//   constructor(name) {
//     this.name = name;
//   }

//   sayName() {
//     return `Привет, мое имя ${this.name}`;
//   }
// }

// const firstParent = new Parent("max");
// // console.log(firstParent);
// // console.log((firstParent.sayName()));

// class Child extends Parent {
    
//   constructor(name, lastName) {
//     super(name);
//     this.lastName = lastName;
//   }

// sayName() {
//     console.log('Это внутренний метод');
// }

//   sayFullName() {
//       const nameString = `${super.sayName()} ${this.lastName}`
//     return nameString;
//   }

// get LastName () {
//     return this.lastName;
// }

// set LastName (newValue) {
//     this._lastName = newValue;
// }

// getLastName () {
//     return this._lastName
// }


// setLastName() {
//     this.lastName = newValue;
// }

// }

// const firstChild = new Child("ivan", "Petrov");

// console.log(firstChild);
// // console.log(firstChild.sayFullName());
// // console.log(firstChild.sayName());
// // firstChild.sayName()

// firstChild.setLastName("Smirnov")
// firstChild.lastName("Smirnov")

// console.log(firstChild.getLastName());

// console.log(firstChild.lastName);


class People {
    constructor(name,surname) {
        this.name = name;
        this.surname = surname;
    }

getFullName() {
         return `Имя: ${this.name}, Фамилия: ${this.surname}`
      }
}

      const firstPeople = new People("ivan", "Petrov");
      
      console.log(firstPeople.getFullName());


      class Worker extends People {
        constructor(name,surname, rate, day) {
                super(name,surname);
                this.rate = rate;
                this.day = day;
              }
              getSalary() {
                  return `${this.getFullName()}, Зарплата: ${this.rate*this.day} руб.`
              }
      }

const firstWorker = new Worker ("Petr", "Petrov", 1500, 20)
const secondWorker = new Worker ("Semen", "Petrov", 1900, 2)
console.log(firstWorker.getSalary());
console.log(secondWorker.getSalary());

