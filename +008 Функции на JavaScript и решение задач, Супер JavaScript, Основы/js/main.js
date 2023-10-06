/***********************************************************************************************************************
 * main.js
 * ---------------------------------------------------------------------------------------------------------------------
 * PhpStorm 2023.1
 * HTML, CSS, JavaScript
 * ---------------------------------------------------------------------------------------------------------------------
 * Уроки по JavaScript - ITDoctor (2022)
 *
 * Курс JavaScript с нуля состоит из 12 уроков. В этом курсе вы узнаете основы языка программирования,
 * без которых невозможно изучать библиотеки, фреймворки или создавать свои собственные интересные скрипты.
 * За 12 уроков вы научитесь работать с переменными разных типов, массивами, объектами,
 * узнаете как проверять условия и создавать циклы. Научитесь создавать свои собственные функции,
 * работать с датой и временем, правильно документировать код и отлавливать ошибки.
 *
 * Так же рассказывается про объектно-ориентированный подход в программирования на языке JavaScript и
 * рассматриваются интересные возможности стандарта ECMAScript 2015 (ES6),
 * который уже максимально хорошо поддерживается всеми браузерами и не требует дополнительной компиляции
 * в более старые версии стандарта ES. Данный курс имеет свое логическое продолжение в виде курса "Супер JavaScript".
 * Узнать подробнее о курсе "Супер JavaScript" можно будет после завершения данного курса. *
 *
 * https://www.youtube.com/playlist?list=PLuY6eeDuleINoCQtGZsMoVVCSgEH7gKQ5
 *
 ***********************************************************************************************************************
 * Writing & Modification by sgiman (SCS) @ 2023-10
 */

alert("main.js")

//--- 1 ---
console.log("\nFUNCTION:")
function printText (name, age) {
    //console.log("Hello! My name is " + name + ", Age: " + age)
    return "Hello! My name is " + name + ", Age: " + age
}
let name = "Pavel"
let age = 19
let res = printText(name,age)
console.log(res)
//alert(res)

//--- 2 (объект) ---
console.log("\nOBJECT:")
let obj = {
    name: "Ivan",
    age: 18,
    hello() {   // метод объекта
        console.log("\nМеня зовут " + this.name)
    }
}
obj.hello()             // метод
console.log(obj.name)   // свойство
console.log(obj.age)

//--- 3 (массив) ---
let arr = [1,5,2,25,16,14,49,3,1,7]

// v1
console.log("\nСортировка и анонимная функция")
arr.sort(function (a,b){ // анонимная функция
    if(a==b) return 0
    if(a<b) return 1
    if(a<b) return -1
})
console.log(arr)

// v2
arr.sort(function (a,b){ // анонимная функция
    return a-b
})
console.log(arr)

// v3
console.log("\nСортировка и срелочная функция")
arr.sort((a, b) => a - b) // стрелочная функция (возвращает "a-b")
console.log(arr)

//----------
//  TASKS
//----------

//--- Task 1 (Числа Фибоначи) ---
console.log("\nTASK1 (Числа Фибоначи):")
function fibonachi(count) {
    let fib = [];
    for(let i=0; i<count; i++) {
        if(i==0) fib[i] = 1;        // const = 1
        else if(i==1) fib[i] = 2;   // const = 2
        else fib[i] = fib[i-2] + fib[i-1]   // cумма предпоследнего и последнего
    }
    return fib
}
let f = fibonachi(15)
console.log(f)

//--- Task 2 (Факториал !n) ---
console.log("\nTASK2 (Факториал !n):")
function factorial(n) {
    let fact = 1;
    if(n==0) return fact;   // для 1
    for(let i=1; i<=n; i++) {
        fact *= i;
    }
    return fact;
}

let a = factorial(0)
console.log(a)

let b = factorial(3)
console.log(b)

let c = factorial(8)
console.log(c)

//--- Task 3 (Cумма-Произведение) ---
console.log("\nTASK3 (Cумма-Произведение):")
//function AddAndMul(num){}
let AddAndMul = function(num) {
   num += ""; // чило в строку
   let add = 0, mul = 1;
   for(let i=0; i<num.length; i++) {
       add += +num[i];  // num в число (+) и суммировать с add
       mul *= num[i];
   }
   return { // вернуть объект
       "Сумма" : add,
       "Произведение" : mul,
   }
}
console.log(AddAndMul(795)) // 7+9+5=21 ,7*9*5=315

//--- Task 4 (Инвертировать Число) ---
console.log("\nTASK4 (Инвертировать Число):")
function reverse (number) {
    number += ""; // число в строку
    let reverseNumber = "";
    for(let i=number.length-1; i>=0; i--) {
        reverseNumber += number[i];
    }
    return +reverseNumber;
}
console.log(reverse(3486))  // 6843

//--- Task 5 (Подсчёт чётных/нечётных цифр) ---
console.log("\nTASK5 (Подсчёт чётных/нечётных цифр):")
function number (number) {
    number += "";
    let chet = 0, nechet = 0;
    for(let i = 0; i < number.length; i++) {
        if(number[i] % 2 == 0) chet++;   // чётные
        else nechet++;  // нечётные
    }
    return { // вернуть объект
        "Чётные цифры": chet,
        "Нечётные цифры": nechet
    }
}
console.log(number(3486798))

//--- Task 6 (Угадать случайное 1..100 за 10 попыток) ---
// Алгоритм бинарного поиска
console.log("\nTASK6 (Угадать случайное 1..100 за 10 попыток):")
function randomNumber () {
    let number = Math.floor(Math.random()*100)
    for(let count=1; count<=10; count++) {
        let result = +prompt(`Попытка №${count}, Введите число: `) // перобразовать в число (+prompt)
        if(result == number) {
            return alert(`Вы угадали число! Попыток: ${count},
            Число:${number}`)
        } else if(result < number) {
            alert(`Ваше число ${result}, меньше загаданного!`)
        } else if(result > number) {
            alert(`Ваше число ${result}, больше загаданного!`)
        }
    } // ---for---
    alert(`Вы не угадали число! Число: ${number}`)
}
randomNumber()
