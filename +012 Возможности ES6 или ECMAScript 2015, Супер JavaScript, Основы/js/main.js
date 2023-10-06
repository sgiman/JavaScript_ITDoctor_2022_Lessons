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

//************************
// ECMAScript 2015 (ES6)
//************************

const x = 3.5   // не изменяется

function summa(a,b) {
    return a+b
}

let data = [4,8]
summa (...data)   // "расширение" для sum

let [a,b,c,d] = [10,5,8,9]  // "деструктивное присваиванние" (присвоить по отдельности)

// СТРЕЛОЧНАЯ ФУНКЦИЯ (анонимная функция)
let sum = (a,b,c) => {
    return a+b+c
}
sum(5,2,3)

let add = (a,b,c) => a+b+c // в одну строку (сокращённая)
add(4,8,9)

// КОНТЕКСТ (this один для всех)

function Person () {
    this.age = 0
    setInterval(() => {
        this.age++;
        console.log(this.age)
    }, 1000);
}

//var p = new Person()

// СИСТЕМЫ ЧИСЕЛ
let nb = 0b111  // 7 (двоичная)
let no = 0o10   // 8 (восьмиричная)

Number.isInteger(18.0)  // проверка целого

// NaN (из старого ES5)
let x1 = "NaN"
let x2 = NaN
let x3 = "hello"
let x4 = 12
console.log("\nisNaN:")
console.log(isNaN(x1))
console.log(isNaN(x2))
console.log(isNaN(x3))
console.log(isNaN(x4))

// NaN (ES6)
console.log("\nNumber.isNaN:")
console.log(Number.isNaN(x1))
console.log(Number.isNaN(x2))
console.log(Number.isNaN(x3))
console.log(Number.isNaN(x4))

// Новые тригонометричеcкие фyнкции (Math)
console.log("\nNew Trigonometric Math:")
console.log(Math.sinh(0))           // гиперболический синус
console.log(Math.cosh(0))           // гиперболический косинус
console.log(Math.tanh(0))           // гиперболический тангес
console.log(Math.asinh(0))          // обратный гиперболический синус
console.log(Math.acosh(1))          // обратный гиперболический косинус
console.log(Math.atanh(0))          // обратный гиперболический тангес
console.log(Math.hypot(2,2,1))   // Теорема Пифагора

// Новые алгебраические фyнкции (Math)
console.log("\nNew Algebraic Math:")
console.log(Math.log2(16))          // логарифм по основанию 2
console.log(Math.log10(1000))       // логарифм по основанию 10
console.log(Math.log1p(0))          // то же, что и log(1+value)
console.log(Math.expm1(0))          // функция обратная Math.log1p()
console.log(Math.cbrt(8))           // корень кубический

// Знак числа - sign
console.log("\nSign Math:")
console.log(Math.sign(16))
console.log(Math.sign(-16))
console.log(Math.sign(0))

// Строки
console.log("\nStrings:")
let s1 = "Str".repeat(3)    // повтор
console.log(s1)

let s2 = "Hello, i'm simple String"
console.log(s2.includes("simple",2))    // поиск на совпадение c позиции
console.log(s2.startsWith("Hello"))     // совпадение с начала
console.log(s2.endsWith("ing"))         // совпадение с конца

// Массивы
console.log("\nArrays:")
let arr = [5,8,9,5,4]
arr.fill(0,1,3)     // заполнение "от-до"
console.log(arr)

let arr2 = ['a','b','c']
let entries = arr2.entries()    // индекс и значение
let keys = arr2.keys()          // индексы (ключи)
let values = arr2.values()      // значения
console.log(...entries)         // "..." итерация массива
console.log(...keys)
console.log(...values)

// Множества (c неповторяющимися элементами)
console.log("\nМножества:")
let set = new Set()
set.add(1)
set.add(2)
set.add(3)
set.add(1)  // не будет добавлено
console.log(set)
console.log(set.has("4"))
console.log(set.size)
set.delete(2)
console.log(set)
set.clear()
console.log(set)

// Удалить дубликаты (lifehack)
let massive = [1,5,4,7,8.91,1,4,5]
let massive2 = [...new Set(massive)]    // массив без дубликатов!!!
console.log(massive)
console.log(massive2)


