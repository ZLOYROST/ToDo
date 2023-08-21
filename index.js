// const objectA = {
//     a: 10,
//     z: true,
//     x: 93
// }
// const copyOfA = objectA
// const first = 1
// copyOfA.d = 65
// console.log(copyOfA.d)
 
 
// function a() {
//     console.log("hey")
// }
// let b = "283d"
// console.log(b)
// a()

// const myCity = {
//  city: "berlin",
//  country: "german",
//     info:{
//     popular: true,
//     rich: false
//   }
  
// // gay: "more"
// }
// delete myCity.info.rich
// // myCity.gay = true
// // myCity.country = "german"
// // console.log(myCity)
// // myCity.city = "moscow"
// //  delete myCity.popular
// // myCity.porn = "Hard"
// console.log(myCity)
// console.log(myCity.gay)
// const myName = "Zloy"
// const post = 25
// const userProfile = {
//  myName,
//  post,
//  hasSignedAgremeent: true
//  }
//  console.log(userProfile)
// const myGorod = {
//     gorod:"Tagan",
//     cityGreeting () {
//         console.log("ччч")
//     }
// }
// myGorod.cityGreeting()

// const person = {
//     name:"alex",
//     age: 777,
//     Kryt: "norm"
// }

// const person2 = {...person}
// person2.name = "Vasya"
// person2.Kryt = "NEt"

// console.log(person2.name)
// console.log(person.name)
// console.log(person.age)
// console.log(person.Kryt)
// console.log(person2.Kryt)

// let a = 10
// let b = 20
// let c = 30
// function sum(a,b,c) {
//     const d = a + b + c
//     console.log(d)
    
// }

// sum(a,b,c)
// let v = 10
// let z = 5
// const h = v + z
// console.log(h)
// ---------------------
// function MyFn(a, b,) {
//    let c
   
//    a = a + 23
//    c = a + b
   
//    return c;
// }
// // let n = function MyFn(a, b,);
// MyFn(20, 3)
// let n = MyFn(20, 9)
// console.log(n)
// -----------

// Передача значение по ссылке

// const people = {
//    name: "Misha",
//    age: 24
// }
// function addPeopleAge(people){
//    people.age +=5
//     people.name = "petya"
// }
// addPeopleAge(people)
// console.log(people.age, people.name)
// ----------------------
// функция с отложенным таймаутом
// function printZloyName() {
//    console.log("ZLOYROST")
// }
// console.log("Start")
// setTimeout(printZloyName, 1000)
// -----------------------------оБЛАСТЬ ВИДИМОСТИ
// let a 
// let b = 4
// let c = 66

// function myFn () {
// let b
// a = false
// b = 20
// console.log(b)
// }
// myFn()
// console.log(a)
// console.log(b)
// ---------------------------------- ЦЕПОЧКА ОПЕРАТОРОВ &&  ||

// const name = true
// const count = true
// const value = true
// const staker = 48
// let yy = 69
// let sum = name && count && value && staker && yy
// console.log(sum);
// -----------------------------Оператор ... Добавление и изменение свойст объекта

// const button = {
//    text: "zalupa",
//    height: 300
// }
// const blueButton = {
//    ...button,
//    color: "blue",
//    text: "bereg"
//    }
//    console.table(blueButton)
// ----------- объединение объектов с помощью ...

// const infoButton = {
//    text: "sold",
//    town: "big"
// }
// const styleButton = {
//    long: 300,
//    short: 500
// }

// const complexButton ={
//    ...infoButton,
//    ...styleButton,
//    text: "pay"
// }
// console.table(complexButton)

// ----------Конкатенация
// const first = "Меня зовут петя"
// const second = " я тут "
// const tirth = "чтобы быть"
// const result = `${first} ${second} ${tirth}`
// console.log(result)
// ----------------Стрелочная функция в вызове другой функции

// setTimeout(() => {
//     console.log("Вызов")
// }, 2000)
// ---------------Значение параметров функции по умолчанию
//  let MultBy = function( value, multiplayer = 1)  {
    
//     return value * multiplayer
// }
// MultBy(3,4)
// ------------Явный возврат объекта
// const newPost = (post, addedAt = Date()) => {
//     const myPost = {
//     ...post,
//     addedAt,
    
//     }
// return myPost
// }
// const firstPost = {
//     id: 1488,
//     author: "Zloy",
    
// }
// console.log(newPost(firstPost))

// ------------как находить ошибки

// const fnWithError = () => {
//     throw new Error("Some kek")
// }

// try {
//     fnWithError()
// } catch (error) {
//     console.error(error)
// }
// console.log("ppp")
// ---------------- Как работает функция просто пример

// function MyFn(z) {
//     console.log(z);
// }
// const h = false;
// let c = 1488

// MyFn(30 + 40)
// MyFn(c)
// MyFn(c+1000)
// MyFn(h+2)
// -----------------Масивы

// let myArray2 = [myArray[1], myArray[5], myArray[4]]
// console.log(myArray2)
// ----------Масив выбор конктертного элемента
// let myArray = [1, 2, 3, 47, 49, -4, -84, "zal", false, true];
// // let  filterResult = myArray.filter((item)=>{
// //   return (item > 2 || typeof item === "boolean" || typeof item === "string");
// // });
// // console.log(filterResult)


// console.log(myArray[1, 4])
// function filter_Arr(arr) {  
//     return arr.filter(number => typeof number == 'number' && number >= 0);
//   }

//   console.table(filter_Arr([0, 1, "1", 2, '2', -3, 3, 99, true, undefined]));
// -----------------масив метод evevry
// function  isBigEnough(element, index, array) {
//   return element >= 2;
// }

// [2, 3, 47, 49, ].every(isBigEnough)

// ---------------масив find

// let array1 = [1, 2, 3, 47, 49, -4, -84, "zal", false, true ];
// const even =(element) => element % 2 === 0;
// console.log(array1.some(even));

// let  filterResult = myArray.filter((item)=>{
  //   return (item > 2 || typeof item === "boolean" || typeof item === "string");
  // let fruits = ['Банан', 'Апельсин', 'Лимон', 59, 'Яблоко', 'Манго', "4", "5", ];
  // let citrus = fruits.slice(0, 4);
  // console.log(citrus)

  // ----МЕТОД FOREACH


  // let myArray = [1, 2, 3, 47, 49, -4, -84, "zal", false, true];
  // const res = myArray.forEach( el => console.log(el - 69))
  // console.log(res)

  // -----------МАССИВ Map

  // let myArray = [1, 2, 3, 47, 49, 4, 84,]
  // // console.log(myArray)
  // const newArray = myArray.map(el => el * 2)
  
  // const dela = newArray.pop()
  // console.log(dela)
  // console.log(newArray)
  
  // -----------ДЕСТРУКТУРИЗАЦИЯ ОБЪЕКТОВ

//   const userProfile = {
//     name: "zloy",
//     age: 69,
//     gay: false
//   }
// let {name, age, gay} = userProfile
// let o = name
// console.log(o, age, gay)
  
// -----------ДЕСТРУКТУРИЗАЦИЯ МАССИВОВ

// const fruits = ["apple", "banana", "qivi"]
// const [fruit1, fruit2, fruit3] = fruits
// console.log(fruit1, fruit2, fruit3)

// ---------------ДЕСТРУКТУРИЗАЦИЯ В ФУНКЦИЯХ

// const userProfile = {
//   name: "zloy",
//   comentsQty: 44,
//   registration: true
// }
// const userInfo = ({name,comentsQty}) => {
//   if (!comentsQty) {
//     return `User ${name} has no comments`
//   }
//   return `User ${name} has ${comentsQty} comments`
// }
// // userInfo(userProfile)

// const userProfile1 = {
//   name: "borya",
//   comentsQty: 32,
//   registration: false
// }
// const userInfo1 = ({name, comentsQty, registration}) => {
//   if (!comentsQty) {
//     return `User ${name} has no comments`
//   }
//   return `User ${name} has ${comentsQty} comments`
// }
// console.log(userProfile1)

// --------- if

// let val = 60
// if (val > 49 ) {
//   val += 30
// }
// else {
//   val -=10
// }
// console.log(val)

// -------------------

// const person = {
// age: 20
// }
// if (!person.name) {
//   console.log("Имя нету")
// }
// ------------------

// const age = 99
// if (age >= 18 && age < 39) {
//   console.log("Adult")
// } 
// if (age >= 12 && age < 18) {
//   console.log("Teenager")
// } 
// if (age >= 40 && age < 100) {
//   console.log("Old")
// } 
// if (age < 12) {
//   console.log("Is child")
// }  

// ------Использование IF в функциях

// let sumPositiveNumbers = (a, b) => {
//   if (typeof a == "string" || typeof b == "string") {
//     return a + b
//   }
  
//   if (typeof a !== "number" || typeof b !== "number"){
//   return "Один из аргументов не является числом"
//  }
//  if (a <= 0 || b <= 0) {
//   return "один из аргументов не является положительным числом"
//  }
//  return a - b
// }
// let vyzov = sumPositiveNumbers(32, 81)
// console.log(vyzov)

//  -------Использование SWICH

// const month = "ывыв"
// switch (month) {
//   case 12: 
//   console.log("december")
//   break
//   case 1:
//     console.log("январь")
//     break
//   case 2:
//     console.log("февраль")
//     break
//   case 3:
//     console.log("март")
//     break
//   case 4:
//     console.log("aprel")
//     break
//   case 5:
//     console.log("май")
//     break
//     default:
//       console.log("написал не то что нужно")
// }

// --------------Тернарный оператор

// const value = 32
// value
//  ? console.log("Условие истинно")
//  : console.log("Условие ложно")
 


// let value = 11
// console.log(value >=0 ? value : -value)

// let value = 69
// const res = value >=0 ? value : -value
// console.table(res)

// -------------ЦИФКЛЫ, FOR
// let i = 2
// for (; i < 51; i++) {
//   if (i % 5 == 0 )
// //   console.log(i)
// }
// let k = 8
// for ( ; k > 5; k--){
//   alert(k)
// }


// let i = 6
// while ( i > 0 ) {
//   console.log(i)
//   i--
// }




// --------FOREACH ДЛЯ ОБЪЕКТОВ

// const myObject = {
//   x: 10,
//   y: true,
//   z: "abc "
// }
// Object.keys(myObject).forEach(key => {
//   console.log(key, myObject[key])
// })
// пример выше даст нам все ключи объекта в виде масива,
// а дальше при помощи forEach мы перебираем элементы этого масива,
// --------------
// const myObject = {
//   x: 10,
//   y: true,
//   z: "abc "
// }
// Object.values(myObject).forEach(value => {
//   console.log(value)
// })
// или можно перебирать сразу значения свойств объекта
// как на примере выше, Object.values - это масив значений

// const myArray = [1, -4, 7, -9, 12, 84, false, "цу"];  
//   let  filterResult = myArray.filter((number)=>{
//     return (number >=0)
// })
// const num = filterResult.reduce(function (A, B,) {
//   return A + B 
// }, 0)
// console.log(num)

// const string = "zalupaкекекекеек"
// for (const letter of string) {
//   console.log(letter)
// }
// const myArray = [1, 3, "horry", true, false, -34, null]
// myArray.forEach( element => {
//   console.log(element)
// })


// const num = 5
//     if (num % 3 === 0  ) {
//       console.log("Fizz")
//     }
//     else if (num % 5 === 0) {
//       console.log("Buzz")
//     }
//     else if (num % 3 === 0  && num % 5 === 0 ) {
//       console.log("fizzbuzz")
//     }
//     else {console.log("kek")}
//      console.log(num)






// const number = []
//   for ( let i = 1; i <= 100; i++) {
//     if (i % 15 === 0) {
//     console.log('fizzBuzz')
//    }
//       else if (i % 3 === 0) {
//       console.log('Fizz')
//      }
//        else if (i % 5 === 0) {
//       console.log('buzz')
//       }
//       else (console.log() )

//     }
     
     
     
     
    //  if (num % 3 === 0  ) {
    //    console.log("Fizz")
    //  }
    //  else if (num % 5 === 0) {
    //    console.log("Buzz")
    //  }
    //  else if (num % 3 === 0  && num % 5 === 0 ) {
    //    console.log("fizzbuzz")
    //  }
    //  else {console.log("kek")}
    //   console.log(num)






 // const num = filterResult.reduce(function (A, B,) {
//   return A + B 
// }, 0)
// console.log(num)


// const first = {
//   x: "urry",
//   y: 92,
//   z: false,
//   p: 0
// }
// Object.keys(first).forEach(key => {
//   console.log(key, first[key] )
// }
// )

// const mult = (a, b, c) => a - b + c
// console.log(mult(7, 4, 9))

// let a = 19
// let b = 20

// function sum(a, b) {
//   const res = a + b
//   console.log(res)
// }
// sum(a, b)

// a = 10
// b = 30
// sum(a, b)


// function myFn(a,b)  {
//   let c
//   a = a + 1
//   c = a + b
//   return c 
// }

// myFn(10, 3) //тут я ничего не получаю, так как ничего не вызываю, ниже пример через переменную, где видет вызов
// let y = myFn(10, 3)
// console.log(y)

// const name = "zloy"
// const postQty = 69

// const userProfile = {
//   name: name,
//   postQty: postQty,
//   autorisze: true
// }
// console.log(userProfile)

// class Comment {
//   constructor(text) {
//     this.text = text
//     this.votesQty = 0
//   }

// upvote() {
//   this.votesQty +=1
// }
// }
// const firstComment = new Comment("first comment")
// firstComment.upvote()
// console.log(firstComment.votesQty)

// ----------создание нескольких классов
// class Commentariy {
//   constructor(text) {
//     this.text = text
//     this.votesQty = 0
//   }

//  downVote() {
//    this.votesQty -=1
// }

//  upVote() {
//    this.votesQty +=1
// }
// }
// const firstCommentariy = new Commentariy('perviy Commentariy')
// const secondCommentariy = new Commentariy('долбаеб блять пошел нахуй пидор')
// const thirdCommentariy = new Commentariy('сам пашол на хуй сынище шлюхи')


// const firstComment = new Commentariy("first comment")
// const secondComment = new Comment("second comment")
// const thirdComment = new Comment("third comment")
// console.log(firstComment.votesQty)
// static mergeComments(first, second) {
//   return `${first} ${second}`
// }
// ----------------РАСШИЕРНИЕ ДРУГИХ КЛАССОВ

// class NumbersArray extends Array {
//   sum() {
//       return this.reduce((el, acc) => acc +=el, 0)
//   }
// }

// const myArray = new NumbersArray(9, 9, 3, 49, 21, -90)
// const a = myArray.sum()
// console.log(a)

// -----------ПРОМИСЫ
// fetch('https://jsonplaceholder.typicode.com/todos')
//       .then(response => {
//         console.log(response)
//         return response.json()
//       })
//       .then(json => console.log(json))
// --------Моментально вызывающаяся функция iife
// (function IIFE(){
// 	console.log( "Hello!" );
// })()
// -------АСИНХРОННЫЕ ФУНКЦИИ
// const asyncFn = async () => {
//   return 'boba'
// }

// console.log(asyncFn())

// const timerPromise = () =>
//   new Promise((resolve, reject) =>
//     setTimeout (() => resolve(), 3850))

// const asyncFn = async () => {
//   console.log('timer start')
//   const startTime = performance.now()
//   await timerPromise()
//   const endTime = performance.now()
//   console.log('timer ended', endTime - startTime )
// }
// asyncFn()

// const asyncFn1 = async () => {
//   await <Promise>
//     }
//     asyncFn1()

// const asyncFn = async () => {
//   return 'gege'
// }
// asyncFn()
                                                  // ЗАДАЧИ ЗАДАЧИ ЗАДАЧИ ЗАДАЧИ ЗАДАЧИ!!!

// for (var i = 0; i < 3; i++) {
//   setTimeout(() => console.log(i), 1);
// }

// for (let i = 0; i < 3; i++) {
//   setTimeout(() => console.log(i), 1);
// }
// --------------------------------------
// const shape = {
//   radius: 10,
//   diameter() {
//     return this.radius * 2;
//   }
// }
// console.log(shape.diameter());
// let a = Math.PI
// console.log(a)

// +false;
// function getAge(...args) {
//   console.log(typeof args);
// }



// const obj = { 1: 'a', 2: 'b', 3: 'c' };
// const set = new Set([1, 2, 3, 4, 5]);

// obj.hasOwnProperty('1');
// obj.hasOwnProperty(1);
// set.has('1');
// set.has(1);

// const num = '';
// console.log(Boolean(num))


// const number = []
//   for ( let i = 1; i <= 10; i++) {
//     if (i % 3 === 0) {
//     console.log('fizzbuzz')
//    }
//       else if (i % 3 === 0) {
//       console.log('Fizz')
//      }
//        else if (i % 5 === 0) {
//       console.log('buzz')
//       }
//       else (console.log('clear') )

//     }

// for (var i = 0; i < 50; i++) {
//   setTimeout(() => console.log(i), 1);
// }

// // const a = {kek: 'kek'}
// // let ddd = 23;
// // let qqq = `hello i am ${a.kek} and i ${ddd} years old`
// // console.log(qqq)

// let a = 'doka'
// console.log(a.replace([2], 't'))

// let a = 1;
let b = 2;

console.log(a + b);

function reverseString(str) {
  return str.split('').reverse().join('')
}

reverseString('Greetings from Earth')

const firstName = 'Zloy';
console.log(firstName[1])

console.log('doka'.replace("k", "t"))


let value = true;
value = String(value); // теперь value — это строка "true"
 alert(typeof value)

// console.log(null)
// const a = 2
function fnA() {
  // a = 7;
 
  let b = 11;
   b = 13;
   let c = 44
  console.log(a); // что будет
  console.log(b); //
  console.log(c)

}
fnA()
console.log(a)
// console.log(b)
console.log('bezdar\'')