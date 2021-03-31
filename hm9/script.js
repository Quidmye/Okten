// 1) створити функцію яка приймає масив та виводить його
function logArray(array = []) {
    console.log(array);
}

// 2) створити функцію яка заповнює масив рандомними числами та виводить його. Для виведення використати попередню функцію.
function arrayWithRandomNumbers(numOfItems = 10, min = -999, max = 999) {
    let arr = [];
    for (let i = 0; i < numOfItems; i++) {
        arr.push(Math.random() * (max - min) + min);
    }
    logArray(arr);
}

//3) створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
function getMin() {
    let result = Infinity;
    for (let i = 0; i < 3; i++) {
        if (arguments[i] < result) {
            result = arguments[i];
        }
    }
    console.log(result);
}

// 4) створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
function getMin() {
    let result = Infinity;
    for (let i = 0; i < 3; i++) {
        if (arguments[i] > result) {
            result = arguments[i];
        }
    }
    console.log(result);
}

//5) створити функцію яка повертає найбільше число з масиву
function getMaxOfArray(array) {
    return Math.max.apply(null, array);
}

//6) створити функцію яка повертає найменьше число з масиву
function getMinOfArray(array) {
    return Math.min.apply(null, array);
}

//7) створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його.
function sumNumbersOfArray(array) {
    return array.reduce((a, b) => a + b);
}


//8) створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
function arithmeticMeanOfArray(array) {
    return array.reduce((a, b) => a + b) / array.lenght;
}

// 9) Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів
function getKeysOfObjects(array) {
    let keys = [];
    for (let item of array) {
        for (let elem in item) {
            keys.push(elem);
        }
    }
    return keys;
}


//10) Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів
function getValuesOfObjects(array) {
    let values = [];
    for (let item of array) {
        for (let elem in item) {
            values.push(item[elem]);
        }
    }
    return values;
}

// 11) створити функцію  яка скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
function sumOfArrayElementsWithSameIndex(array1, array2) {
    let result = [];
    for (i in array1) {
        result.push(array1[i] + array2[i]);
    }
    return result;
}

//- створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);
function calembour() {
    let min = Infinity;
    let max = -Infinity;
    for (let i = 0; i < arguments.length; i++) {
        if (arguments[i] < min) {
            min = arguments[i];
        }
    }
    for (let i = 0; i < arguments.length; i++) {
        if (arguments[i] > max) {
            max = arguments[i];
        }
    }
    console.log(max);
    return min;
}

//- Взяти задачі з завдання 10 та 9 та обєднати їх в одну динамічну функцію.
function getSomeOfObjects(array, some = 'keys') {
    let values = [];
    for (let item of array) {
        for (let elem in item) {
            some === 'keys' ? values.push(elem) : values.push(item[elem]);
        }
    }
    return values;
}

//- Приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"

function arrayShuffle(array, i) {
    let container = array[i];
    array[i] = array[i + 1];
    array[i + 1] = container;
    return array;
}

//- Сворити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
// Двожина масиву від 2 до 100
function moveZeroToEnd(array) {
    array.sort((a, b) => a === 0);
    return array;
}


//- Дано список імен.
// let n1 = '    Harry       Potter      '
// let n2 = '    Ron       Whisley      '
// let n3 = '    Hermione       Granger      '
// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
// let n1 = 'Harry Potter'
// let n2 = 'Ron Whisley'
// let n3 = 'Hermione Granger'

function validate(name) {
    name = name.trim();
    return name.replace(/\s\s+/g, ' ')
}

//Створити функцію яка :
// - Додає в боді блок з текстом "Hello owu"
function writeHelloOwu() {
    let div = document.createElement('div');
    div.innerText = 'Hello owu';
    document.body.appendChild(div);
}

//- Додає в боді елемент з текстом . Тип елементу та текст отримати через аргументи
function appendSomeElementWithSomeText(element, text) {
    let elem = document.createElement(element);
    elem.innerText = text;
    document.body.appendChild(elem);
}

//- приймає масив автомобілів (можна взяти з попередніх дз ),та  індентифікатор елемнту в який потрібно додати список цих автомобілів.
// Для кожного автомобіля створити свій блок, та додати його в елемент, індентифікатор якого ви отримали. Всі властивості авто в обному блоці
//Я хз де там в минулих ДЗ були автомобілі, створив на свій россуд

let cars = [
    {
        name: 'Vokswagen Passat',
        props: {
            color: 'red',
            year: '2001'
        }
    },
    {
        name: 'Mercedes-Benz W211',
        props: {
            color: 'grey',
            year: '2005'
        }
    },
    {
        name: 'Audi A6',
        props: {
            color: 'yellow',
            year: '2005'
        }
    },
    {
        name: 'Renault Megane',
        props: {
            color: 'black',
            year: '2001'
        }
    }

];

function appendCars(cars, id) {
    let element = document.getElementById(id);
    for (car in cars) {
        div = document.createElement('div');
        div.innerText = cars[car].name;
        div2 = document.createElement('div');
        div2.innerText = `Color: ${cars[car].props.color}, year: ${cars[car].props.year}`;
        div.appendChild(div2)
        element.appendChild(div);
    }
}

//Для кожної властивості створити всередені блока автомоблія свій блок
function appendCars2(cars, id) {
    let element = document.getElementById(id);
    for (car in cars) {
        div = document.createElement('div');
        div.innerText = cars[car].name;
        for (props in cars[car].props) {
            divka = document.createElement('div');
            divka.innerText = `${props}: ${cars[car].props[props]}`;
            div.appendChild(divka);
        }
        element.appendChild(div);
    }
}

// 1) Точная степень двойки.
// Дано натуральное число N.
// Выведите слово YES, если число N является точной степенью двойки,
// или слово NO в противном случае.
// Операцией возведения в степень пользоваться нельзя!

function powerOfTwo(x) {
    let message = (Math.log(x) / Math.log(2)) % 1 === 0 ? 'YES' : 'NO';
    console.log(message);
}

//2) Deep Copy
// реалізувати глибоке копіювання обєкту за допомогою рекурсій
function copyObj(source) {
    let result = {};
    for (ele in source) {
        if (typeof source[ele] === 'object') {
            result[ele] = copyObj(source[ele]);
        } else {
            result[ele] = source[ele];
        }
    }
    return result;
}

//3) Flat
// Вирівняти багаторівневий масив в однорівневий
let arr = [1, 3, ['Hello', 'Wordd', [9,6,1]], ['oops'], 9];
arr.flat(Infinity);




