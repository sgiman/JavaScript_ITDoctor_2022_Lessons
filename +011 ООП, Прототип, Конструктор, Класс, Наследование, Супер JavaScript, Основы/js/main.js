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
 * Writing & Modification by sgiman (SCS) @ 2023-09
 */

alert("main.js")

//****************
// О Б Ъ Е К Т Ы
//****************
let admin = {
    rules: 777,     // свойство
    isAdmin () {    // метод
        console.log("Я админ "+this.name+", мои права " + this.rules)
    }
}
/*
let user = {
    name: "Ivan",
    age: 20,
    __proto__: admin
}
*/

// Фукция-Консруктор (с большой литеры)
/*
function User(name,age) {
    this.name = name;
    this.age = age;
    this.myInfo = function() {
        console.log("Меня зовут "+this.name+" , мне "+this.age+" лет")
    }
    this.__proto__ = admin;
}
// Создать объект с помощью конструктора
let u1 = new User("Peter", 21)
let u2 = new User("Kate", 19)
let u3 = new User("Masha", 20)
*/

//****************
// К Л А С С Ы
//****************
class User
{
    // СВОЙСТВА
    //admin = true
    // КОНСТРУКТОР
    constructor(name, age, admin=false) {
        this.name = name;
        this.age = age;
        this.admin = admin;
    }
    // МЕТОД
    myInfo()
    {
        console.log("Меня зовут "+this.name+" , Мой возвраст: "+this.age)
        if(this.admin == true) {
            console.log("Я админ")
        }
    }
} //--- class User ---

// НАСЛЕДОВАНИЕ
class Moderator extends User
{
    constructor(name, age, admin=false, moder=true) {
        super(name, age, admin);
        this.moder = moder;
    }

    // Cтатические свойства и методы работают с классами, а не с объектами
    static addPost() {  // Moderator.addPost() (аналог Math)
        console.log("New Post")
    }
    static master = true;   // Moderator.master

    // ПОЛИМОРФИЗМ
    myInfo()
    {
        super.myInfo(); // вывести от родителя
        console.log("Я модератор")
    }
}//--- class Moderator ---

// Создать объекты с помощью класса
let u1 = new User("Peter", 21)
let u2 = new User("Kate", 19, true) // for admin
let u3 = new User("Masha", 20)
let m1 = new Moderator("Ivan", 22)

//****************
//    SAMPLES
//***************

/**
 * Класс человек
 * @param fio по формату "Фамилия Имя Отчество"
 * @param birthday день рождение по формату "24.11.1994"
 * @param numbers номер, если больше 2-х номеров, то по формату "номер1, номер2"
 * @param room комната
 */
class People {
    //-------------
    // КОНСТРУКТОР
    //-------------
    constructor(fio, birthday, numbers="", room="") {
        // ФИО
        let name = fio.toLowerCase().split(" ");  // разделить ФИО пробелом в ниж.регистре
        this.name = {}; // объект
        this.name.f = name[0][0].toUpperCase() + name[0].slice(1)   // с заглавной
        this.name.i = name[1][0].toUpperCase() + name[1].slice(1)   // с заглавной
        this.name.o = name[2][0].toUpperCase() + name[2].slice(1)   // с заглавной

        // ДАТА
        let date = birthday.split(".");
        this.date = {};  // пустой составной объект
        this.date.d = +date[0]
        this.date.m = +date[1]
        this.date.y = +date[2]

        // НОМЕРА
        this.numbers = numbers.split(", ")
        /*-------------------------------------
        let phone = numbers.split(" ,")
        this.numbers = [];   // массив
        for(let i = 0; i>phone.length; i++) {
            this.numbers.push(phone[i])
        }
        --------------------------------------*/
        this.room = +room;
    }//--- constructor ---

    //-------------
    //   МЕТОДЫ
    //-------------
    static month = ["января", "февраля", "марта", "апреля", "мaя", "июня",
        "июля", "августа", "сентября", "октября", "ноября", "декабря"];

    /**
     * Вывести ФИО
     * @return {String} Строка формата "Фамилия Имя Отчество"
     */
    getFio() {
        return `${this.name.f} ${this.name.i} ${this.name.o}`
    }

    /**
     * Вывести день рождения
     * @return {String} Строка формата "24 июля 1997"
     */
    getBirthday () {
        return `${this.date.d} ${People.month[this.date.m-1]} ${this.date.y}`
    }

    /**
     * Вывести Фамилия_Имя_Отчество.расширение
     * @param {String} extension расширение, например "jpg" или "png"
     * @return {String} для названия изображения
     */
    getImgSrc (extension) {
        return `${this.name.f}_${this.name.i}_${this.name.o}.${extension}`
    }

    /**
     * Вывести все номера телефонов или только первый телефон
     * @param {Boolean} allNumbers если true - то все номера, если false - то только первый номер
     * @param {String} Строка формата: "89006660099, 89009996699"
     */
    getNumberList (allNumbers) {
        if (this.numbers.length == 0 || this.numbers[0].length == 0)
            return undefined
        if(allNumbers) {
            return this.numbers.join(", ")
        } else {
            return this.numbers[0]
        }
    }

}//--- class People ---

let people1 = new People("уСеИнов ИсмAиЛ aCанович", "24.11.1994", "9984, 8847, 5478", 542)
console.log(people1.getFio()) // метод - получить ФИО

let people2 = new People("Иванов Иван Иванович", "01.01.1970")
console.log(people2.getFio())
