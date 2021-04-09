//Необхідно реалізувати базовий клас комютера. Який має лише параметри:
// Оперативна память.
// Потужність процесора. (цифра від 0 до 1000)
// Назва.
// В кожного компютера має бути метод включання.

class compuktor {
    constructor(ram, core, name) {
        this.ram = ram;
        this.core = core;
        this.name = name;
        if (!typeof this.core !== 'number' || this.core > 1000 || this.core < 0) {
            return alert('ПОтужность процессора должна быть в диапазоне от 0 до 1000');
        }
    }

    power() {
        console.log('Вжжжжжжжжжжж');
    }
}

//Від базового компютрера треба реалізувати ноутбук.
// Він має нову властивість дюймаж монітора.
//
// У нього зявляється нова змінна роботи батареї. Ця змінна визначається як потужність / (дюйми * оперативку)

class laptop extends compuktor {
    constructor(ram, core, name, screen) {
        super(ram, core, name);
        this.screen = screen;
        this.battery = screen * ram;
    }
}

//Від ноутбука потрібно зробити ультрабук.
// Він має нову змінну ваги.
// При включенні ультрабуку має видаватися помилка, якшо вага більша за 2кг та батарея тримаж менше ніж 4 години.
class ultrabook extends laptop {
    constructor(ram, core, name, screen, weight) {
        super(screen);
        this.weight = weight;
    }

    power() {
        if (this.weight > 2 && this.battery < 4) {
            return alert('Батарея капут');
        }
        console.log('Вжжжжжжжжжжж');
    }
}

//Від базвого класу потрібно створити базовий ПК.
// В нього має бути новий метод запуску ігор.
// Кількість FPS визначається як потужність / опервтивку.
// Example: `You are playing *GAME_NAME* with *FPS_COUNT* FSP`


//Компютер можна апгрейдити.
// Потужність процесора можна збільшувати максимум на 10%. Зменшувати її не можна.
// Оперативку можна збільшити лише в 2 рази. Зменшувати її не можна.
// Для зміни характеритик мають бути свої методи. Мняти змінну "в лоб" заборонено.
class PC extends compuktor {
    constructor(ram, core, name) {
        super(ram, core, name);
        this.fps = this.cor / this.ram;
    }

    play(game) {
        console.log(`You are playing ${game} with ${this.fps} FSP`);
    }

    setCore(newCore) {
        let procent = (this.core / 100) * 10;
        if (newCore > (core + procent)) {
            return alert('Жопа слипнется');
        }
    }

    setRam(newRam) {
        if (newRam > (this.ram * 2)) {
            return alert('Жопа слипнется');
        }
    }
}

//Від базового ПК необхідно зробити ігровий ПК.
// Кількість ФПС має бути рівно в 2 рази більший ніж в звичайного ПК.
// При запуску однієї гри потужніть процесора має падати на 0.1%.
// Якшо потужність процесора менша ніж 500. І оперативка менша за 8 потрібно видати помилку, (алерт, або консоль)
// що на цьому відрі ігри не запускаються.

class gamingPC extends PC {
    constructor(ram, core, name) {
        super(ram, core, name);
        this.fps *= 2;
    }

    play(game) {
        this.core = this.core - (this.core / 1000)
        if (this.core < 500 && this.ram < 8) {
            return alert('на цьому відрі ігри не запускаються');
        }
        console.log(`You are playing ${game} with ${this.fps} FSP`);
    }
}

//- Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car

function Car(model, manufacturer, year, speed, engine) {
    this.model = model;
    this.manufacturer = manufacturer;
    this.year = year;
    this.speed = speed;
    this.engine = engine;

    this.drive = function () {
        console.log(`їдемо зі швидкістю ${this.speed} на годину`);
    }

    this.info = function () {
        console.log(`Model: ${this.model}, Manufacturer: ${this.manufacturer}, year: ${this.year}, max speed: ${this.speed}, engine: ${this.engine}`);
    }

    this.increaseMaxSpeed = function (newSpeed) {
        this.speed = newSpeed;
    }

    this.changeYear = function (newYear) {
        this.year = newYear;
    }

    this.addDrive = function (driver) {
        this.driver = {
            name: driver.name,
            license: driver.license
        }
    }
}

//-створити класс попелюшка з полями ім'я, вік, розмір ноги

class Cinderella {
    constructor(name, age, foot) {
        this.name = name;
        this.age = age;
        this.foot = foot;
    }

}

//--Створити 10 попелюшок , покласти їх в масив
let Cinderellas = [
    new Cinderella('Даздрасмыгда', 13, 30),
    new Cinderella('Даздраперма', 15, 29),
    new Cinderella('Аврора', 12, 32),
    new Cinderella('Беллатриса', 85, 36),
    new Cinderella('Виолета', 19, 33),
    new Cinderella('Абдула', 14, 28),
    new Cinderella('Арианна', 17, 27),
    new Cinderella('Мальберта', 19, 29),
    new Cinderella('Азалия', 18, 30),
    new Cinderella('Нимфадора', 17, 33)
];


//--Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
class Prince {
    constructor(name, age, slipper) {
        this.name = name;
        this.age = age;
        this.slipper = slipper;
    }
}

let prince = new Prince('Лориерик', 20, 27);

//-- за допоиоги циклу знайти яка попелюшка повинна бути з принцом
for (cinderella of Cinderellas) {
    if (cinderella.foot === prince.slipper) {
        console.log(cinderella.name)
    }
}

//--Сторити об'єкт типу "принц" за допомоги функції конструктора з полями ім'я, вік, туфелька яку він знайшов, та функцію "пошук попелюшки"
// -- функція повинна приймати масив попелюшок, та шукає ту котра йому підходить

class Prince2 {
    constructor(name, age, slipper) {
        this.name = name;
        this.age = age;
        this.slipper = slipper;
    }

    findCenderella(cinderellas) {
        for (cinderella of cinderellas) {
            if (cinderella.foot === prince.slipper) {
                return cinderella;
            }
        }
    }
}

//-  Створити функцію конструктор для об'єкту який описує теги
// Властивості
//  -назва тегу
//  - опис його дій
//  - масив з атрибутами (2-3 атрибути максимум)
//  Кожен атрибут описати як окремий який буде містити
//  -назву атрибуту
//  -опис дії атрибуту
//  інформацію брати з htmlbook.ru
//
//  Таким чином описати теги
//  -a
//  -div
//  -h1
//  -span
//  -input
//  -form
//  -option
//  -select
//  Приклад результату
//    {
//         titleOfTag: 'area',
//         action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
//         attrs: [
//         {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//         {/*some props and values*/},
//         {/*...*/},
//         {/*...*/},
//         ]
//
//    }

function TagInfo(tag, action, attributes){
    this.titleOfTag = tag;
    this.action = action;
    this.attrs = attributes;
}
