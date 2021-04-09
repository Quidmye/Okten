// 1) Створити масив з 20 чисел та:
let number = [45, 87, 3, 1, -99, 43, 456, 2, 98, 8, 0, -12, 65, 4, 5, 10, 987, 12, 64, 1];

// a) відсортувати його від меншого до більшого.
number.sort((a, b) => a > b);

// b) відсортувати його від більшого до меншого.
number.sort((a, b) => a < b);

// c) Відфілтрувати числа які є кратними 3.
number.filter(value => value % 3 === 0);

// d) Відфілтрувати числа які є більшими за 10.
number.filter(value => value > 10);

// e) Проітерувати його forEach та вивести кожеш елмент за допомогою document.write
number.forEach(value => document.write(value));

// f) За допомогою map збільшити кожен елемент в масиві в три рази.
number.map(value => value * 3);

// g) Порахувати загальну суму всіх елментів у масиві (reduce)
number.reduce((acc, value) => acc += value);

// 2) Створити масив з 20 стрічок та:
let strings = ['number', 'sort', 'filter', 'forEach', 'console', 'reduce', 'Відфілтрувати', 'допомогою', 'збільшити', 'document',
    'меншого', 'strings', 'числа', 'Створити', 'масиві', 'елментів', 'всіх', 'суму', 'загальну', 'його'];

// a) Відсортувати його в алфавітному порядку
strings.sort((a, b) => a > b);

// b) Відсортувати в зворотньому порядку
strings.sort((a, b) => a < b);

// c) Отримати в новому масиві тільки ті слова, довжина яких більша за 4 букви (filter)
let newStrings = strings.filter(value => value.length > 4);

// d) Змінити кожне слово в масиві додавши на початок 'Sam says *ваше слово*'
strings.map(value => `Sam says ${value}`);

// 3) Все робити тільки за допомогою методів масивів!
// Дано масив :
const users = [
    {name: 'vasya', age: 31, isMarried: false},
    {name: 'petya', age: 30, isMarried: true},
    {name: 'kolya', age: 29, isMarried: true},
    {name: 'olya', age: 28, isMarried: false},
    {name: 'max', age: 30, isMarried: true},
    {name: 'anya', age: 31, isMarried: false},
    {name: 'oleg', age: 28, isMarried: false},
    {name: 'andrey', age: 29, isMarried: true},
    {name: 'masha', age: 30, isMarried: true},
    {name: 'olya', age: 31, isMarried: false},
    {name: 'max', age: 31, isMarried: true}
];

//a) відсортувати його за  віком (зростання , а потім окремо спадання)
users.sort((a, b) => a.age < b.age);
users.sort((a, b) => a.age > b.age);

//b) відсортувати його за кількістю знаків в імені  (зростання , а потім окремо спадання)
users.sort((a, b) => a.name.length > b.name.length);
users.sort((a, b) => a.name.length < b.name.length);

//c) пройтись по ньому та додати кожному юзеру поле id - яке характеризує унікальний індентифікатор (По якому принципу його створювати - ваше рішення),
//    та зберегти це в новий масив
let usersWithId = users.reduce((accumulator, value, index) => {
    accumulator.push({
        name: value.name,
        age: value.age,
        isMarried: value.isMarried,
        id: index + 1
    });
    return accumulator;
}, []);

// d) відсортувати його за індентифікатором
usersWithId.sort((a, b) => a.id > b.id);

// e) Всі хто одружений мають попасти у новий масив та отрмати квартиру (reduce)
let usersWithFlat = users.reduce((accumulator, value,) => {
    if (value.isMarried) {
        accumulator.push({
            name: value.name,
            age: value.age,
            isMarried: value.isMarried,
            hasFlat: true
        });
    }
    return accumulator;
}, []);

const cars = [
    {
        producer: "subaru",
        model: "wrx",
        year: 2010,
        color: "blue",
        type: "sedan",
        engine: "ej204x",
        volume: 2,
        power: 400
    },
    {
        producer: "subaru",
        model: "legacy",
        year: 2007,
        color: "silver",
        type: "sedan",
        engine: "ez30",
        volume: 3,
        power: 250
    },
    {
        producer: "subaru",
        model: "tribeca",
        year: 2011,
        color: "white",
        type: "jeep",
        engine: "ej20",
        volume: 2,
        power: 300
    },
    {
        producer: "subaru",
        model: "leone",
        year: 1998,
        color: "yellow",
        type: "sedan",
        engine: "ez20x",
        volume: 2,
        power: 140
    },
    {
        producer: "subaru",
        model: "impreza",
        year: 2014,
        color: "red",
        type: "sedan",
        engine: "ej204x",
        volume: 2,
        power: 200
    },
    {
        producer: "subaru",
        model: "outback",
        year: 2014,
        color: "red",
        type: "hachback",
        engine: "ej204",
        volume: 2,
        power: 165
    },
    {producer: "bmw", model: "115", year: 2013, color: "red", type: "hachback", engine: "f15", volume: 1.5, power: 120},
    {producer: "bmw", model: "315", year: 2010, color: "white", type: "sedan", engine: "f15", volume: 1.5, power: 120},
    {producer: "bmw", model: "650", year: 2009, color: "black", type: "coupe", engine: "f60", volume: 6, power: 350},
    {producer: "bmw", model: "320", year: 2012, color: "red", type: "sedan", engine: "f20", volume: 2, power: 180},
    {
        producer: "mercedes",
        model: "e200",
        year: 1990,
        color: "silver",
        type: "sedan",
        engine: "eng200",
        volume: 2,
        power: 180
    },
    {
        producer: "mercedes",
        model: "e63",
        year: 2017,
        color: "yellow",
        type: "sedan",
        engine: "amg63",
        volume: 3,
        power: 400
    },
    {
        producer: "mercedes",
        model: "c250",
        year: 2017,
        color: "red",
        type: "sedan",
        engine: "eng25",
        volume: 2.5,
        power: 230
    }
];

// Відфільтрувати масив за наступними крітеріями :
// - двигун більше 3х літрів
cars.filter(value => value.volume > 3);

// - двигун = 2л
cars.filter(value => value.volume === 2);

//- виробник мерс
cars.filter(value => value.producer === 'mercedes');

// - двигун більше 3х літрів + виробник мерседес
cars.filter(value => value.volume > 3 && value.producer === 'mercedes');

// - двигун більше 3х літрів + виробник субару
cars.filter(value => value.volume > 3 && value.producer === 'subaru');

// - сили більше ніж 300
cars.filter(value => value.power > 300);

//- сили більше ніж 300 + виробник субару
cars.filter(value => value.power > 300 && value.producer === 'subaru');

// - мотор серіі ej
cars.filter(value => value.engine.startsWith('ej'));

//- сили більше ніж 300 + виробник субару + мотор серіі ej
cars.filter(value => value.engine.startsWith('ej') && value.power > 300 && value.producer === 'subaru');

//- двигун меньше 3х літрів + виробник мерседес
cars.filter(value => value.volume < 3 && value.producer === 'mercedes');

// - двигун більше 2л + сили більше 250
cars.filter(value => value.volume > 2 && value.power > 250);

// - сили більше 250  + виробник бмв
cars.filter(value => value.power > 300 && value.producer === 'bmw');


// - взять слдующий массив
const usersWithAddress = [
    {id: 9, name: 'vasya', age: 31, isMarried: false, address: {city: 'Kyiv', street: 'Gongadze', number: 16}},
    {id: 2, name: 'petya', age: 30, isMarried: true, address: {city: 'Rivne', street: 'Zelena', number: 1}},
    {id: 4, name: 'kolya', age: 29, isMarried: true, address: {city: 'Lviv', street: 'Pasichna', number: 121}},
    {id: 3, name: 'olya', age: 28, isMarried: false, address: {city: 'Rivne', street: 'Shevchenko', number: 90}},
    {id: 8, name: 'max', age: 30, isMarried: true, address: {city: 'Lviv', street: 'Kriva Lipa', number: 115}},
    {id: 6, name: 'anya', age: 31, isMarried: false, address: {city: 'Lviv', street: 'Shevchenko', number: 2}},
    {id: 10, name: 'oleg', age: 28, isMarried: false, address: {city: 'Kyiv', street: 'Centralna', number: 22}},
    {id: 5, name: 'andrey', age: 29, isMarried: true, address: {city: 'Lviv', street: 'Gorodotska', number: 43}},
    {id: 1, name: 'masha', age: 30, isMarried: true, address: {city: 'Kyiv', street: 'Peremogi', number: 12}},
    {id: 7, name: 'olya', age: 31, isMarried: false, address: {city: 'Lviv', street: 'Naukova', number: 16}},
    {id: 11, name: 'max', age: 31, isMarried: true, address: {city: 'Rivne', street: 'Ivana Franka', number: 121}}
];

// -- Відсортувати їх по ID
usersWithAddress.sort((a, b) => a.id > b.id);

//-- Відсортувати їх по ID в зворотньому порядку
usersWithAddress.sort((a, b) => a.id < b.id);

//-- Відсортувати по віку
usersWithAddress.sort((a, b) => a.age > b.age);

// -- Відсортувати по віку в зворотньому порядку
usersWithAddress.sort((a, b) => a.age < b.age);

//-- Відсорутвати по імені
usersWithAddress.sort((a, b) => a.name > b.name);

///-- Відсорутвати по назві вулиці
usersWithAddress.sort((a, b) => a.address.street > b.address.street);

//-- Відсорутвати по номеру будинку
usersWithAddress.sort((a, b) => a.address.number > b.address.number);

//-- Залигити тільки тих, хто молодший ніж 30 (filter)
usersWithAddress.filter(value => value.age < 30)

// -- Залишити тільки одружених
usersWithAddress.filter(value => value.isMarried)

//-- Залишити тільки одружених, які молодні за 30
usersWithAddress.filter(value => value.isMarried && value.age < 30)

// -- Залишити лише тих, в кого парні номери будинків.
usersWithAddress.filter(value => value.address.number % 2 === 0)

//-- Порахувати загальний вік всіх людей. (reduce)
usersWithAddress.reduce((acc, value) => acc += value.age, 0);

//-- Ті, хто одружений і старий за 30 має отримати обєкти child і попасти в новий масив (reduce)
usersWithAddress.reduce((acc, value) => {
    if (value.isMarried && value.age > 30) {
        acc.push({
            id: value.id,
            name: value.name,
            age: value.age,
            isMarried: value.isMarried,
            address: {
                city: value.address.city,
                street: value.address.city,
                number: value.address.number
            },
            child: {
                age: Math.floor(Math.random() * 5) + 1
            }
        });
    }
}, []);
