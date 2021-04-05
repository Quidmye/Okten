// Cоздать функцию которая принимает число и возвращает  текст как в примере:
// 3275  —>  "3000 + 200 + 70 +5"

function toDigits(number) {
    let digits = [];
    for (i = 0; 0 < number; i++) {
        digits.push((number % 10) + '0'.repeat(i));
        number = parseInt(number / 10);
    }
    return digits.reverse().join(' + ');
}

//Дан массив целых чисел, найдите тот, который встречается нечетное количество раз.Всегда будет только одно целое число, которое встречается нечетное количество раз
// [1,2,3,4,5,2,4,1,3] -> 5

function returnUnpaired(array) {
    for (i = 0; i < array.length; i++) {
        let count = 0;
        let index = array.indexOf(array[i]);
        while (index !== -1) {
            count++;
            index = array.indexOf(array[i], index + 1);
        }
        if (count % 2 !== 0) {
            return array[i];
        }
    }
}

//Знайти анаграму.
// Перевірити чи слово має в собі такі самі літери як і поеперднє слово.
//
// ANAGRAM | MGANRAA -> true
// EXIT | AXET -> false
// GOOD | DOGO -> true

function isAnagramma(string1, string2) {
    let array1 = string1.split('').sort();
    let array2 = string2.split('').sort();
    let result1 = array1.join('');
    let result2 = array2.join('');
    return result1 === result2;
}

//Точная степень двойки
// Дано натуральное число N.
// Выведите слово YES, если число N является точной степенью двойки, или слово NO в противном случае.
// Операцией возведения в степень пользоваться нельзя!
function powerOfTwo(x) {
    let message = (Math.log(x) / Math.log(2)) % 1 === 0 ? 'YES' : 'NO';
    console.log(message);
}

//Сумма цифр числа
// Дано натуральное число N. Вычислите сумму его цифр.
// При решении этой задачи нельзя использовать строки,
// списки, массивы ну и циклы, разумеется.
// Рекурсія)
function sumOfNums(number) {
    let result = 0;
    for (i = 0; 0 < number; i++) {
        result += number % 10;
        number = parseInt(number / 10);
    }
    return result;
}

console.log(sumOfNums(12389));

//Палиндром
// Дано слово, состоящее только из строчных латинских букв. Проверьте, является ли это слово палиндромом. Выведите YES или NO.
// При решении этой задачи нельзя пользоваться циклами, в решениях на питоне нельзя использовать срезы с шагом, отличным от 1.
function isPolindrome(word) {
    let word2 = word.split('').reverse().join('');
    console.log(word2 === word ? 'YES' : 'NO');
}

//Количество единиц
// Дана последовательность натуральных чисел  в строке, завершающаяся двумя числами 0 подряд. Определите, сколько раз в этой последовательности встречается число 1. Числа, идущие после двух нулей, необходимо игнорировать.
//
// 2176491947586100 -> 3

function countOfOne(number) {
    let expression = number.toString().split('00')[0];
    let count = 0;
    let index = expression.indexOf('1');
    while (index !== -1) {
        if (index = expression.indexOf('1', index + 1)) {
            count++;
        }
    }
    return count;
}

//Вирівняти багаторівневий масив в однорівневий
// [1,3, ['Hello, 'Wordd', [9,6,1]], ['oops'], 9] -> [1, 3, 'Hello, 'Wordd', 9, 6, 1, 'oops', 9]
// flat використовувати заборонено.
function multiLVLToOneLVL(array) {
    return array.reduce((accumulator, value) =>
        accumulator.concat(Array.isArray(value) ? multiLVLToOneLVL(value) : value), []);
};

//Знайти набільший елемент в масиві за допомогою reduce
// [1,6,9,0,17,88,4,7] -> 88
console.log([1, 6, 9, 0, 17, 88, 4, 7].reduce(function (accumulator, current) {
    return current > accumulator ? current : accumulator;
}, -Infinity));

//Реалізувати друкарську машинку.
// У вас є текст "Hello World".
// Ваша функція має друкувати цей текст по 1 симоволу в браузері.
// КОЖНА нова буква має бути з РАНДОМНОЮ заутримкою від 0.1 до 1 секунди.
// Цим самим ви маєте симулювати написання даного тексту юзером.
// Приклад: "Hello"
// Затримки:
// H (затримка 0.6)
// e (затримка 0.1)
// l (затримка 0.3)
// l (затримка 0.7)
// о (затримка 1)
function printText(text) {
    let div = document.createElement('div');
    document.body.appendChild(div);
    let char = 0;

    function write() {
        if (char < text.length) {
            div.innerHTML += text.charAt(char);
            char++;
            setTimeout(write, Math.random() * (1000 - 100) + 100)
        }
    }

    write();
}


function nameToLongForWrite(max, min) {
    //Шукаю прості числа до max
    let primeNumbers = Array.from(Array(max-2).keys()).map(x => x+2);
    for (i = 0; i < primeNumbers.length; i++) {
        primeNumbers = primeNumbers.filter((word) => {
            return word === primeNumbers[i] || word % primeNumbers[i] !== 0;
        });
    }
    //видаляю все, що менше min
    primeNumbers = primeNumbers.filter((word) => {
        return word > min;
    });
    //Множу все на все і сортую по величині
    let arrayOfResults = [];
    for (i = primeNumbers.length - 1; i >= 0; i--) {
        for (e = primeNumbers.length - 1; e >= 0; e--) {
            arrayOfResults.push(primeNumbers[i] * primeNumbers[e]);
        }
    }
    arrayOfResults = arrayOfResults.sort((a, b) => a < b);

    //Шукаю поліндром
    let result;
    for (item of arrayOfResults) {
        if (item.toString() === item.toString().split('').reverse().join('')) {
            result = item;
            break;
        }
    }
    return result;
}

console.log(nameToLongForWrite(99999, 9999));
