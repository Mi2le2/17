// Добавить данные карты в таблицу
function addCard(){
    // Получить Элемент формы
    var form = document.querySelector(".form form");

    // Отменить действие по умолчанию (перезагрузка страницы)
    event.preventDefault();

    // Получить таблицу
    var table = document.querySelector("table");


    // Добавить новую строку в таблицу
    var row = table.insertRow(1);

    // Добавить новые ячейки в строку
    var bankNameCell = row.insertCell(0);
    var paymentSystemCell = row.insertCell(1);
    var cardNumberCell = row.insertCell(2);
    var cardFioCell = row.insertCell(3);
    var cardLifetimeCell = row.insertCell(4);

    // Получить значение банка из формы
    var selectBank = form.elements["bank-name"].value;
    var bank;

    // Определить название банка
    switch (selectBank) {
        case "1":
            bank = "Сбербанк";
            break;
        case "2":
            bank = "Альфа Банк";
            break;
        case "3":
            bank = "Банк Открытие";
            break;
        case "4":
            bank = "Тинькофф Банк";
            break;
        case "5":
            bank = "ВТБ";
            break;

        default:
            bank = "Не определено";
    }


    // Получить значение платежной системы из формы
    var selectPayment = form.elements["payment-system-name"].value;
    var payment;

    // Определить название банка
    switch (selectBank) {
        case "1":
            payment = "Visa";
            break;
        case "2":
            payment = "MasterCard";
            break;
        case "3":
            payment = "Мир";
            break;

        default:
            payment = "Не определено";
    }


    // Установить содержимое ячеек из значений формы
    bankNameCell.innerHTML = bank;
    paymentSystemCell.innerHTML = payment;
    cardNumberCell.innerHTML = form.elements["card-number"].value;
    cardFioCell.innerHTML = form.elements["card-fio"].value.toUpperCase(); //Имя в верхнем регистре
    cardLifetimeCell.innerHTML = form.elements["card-lifetime"].value;

    // Очистить форму
    form.reset();

    // Обнулить логотип банка
    var bankImg = document.querySelector(".display-bank-logo img");
    bankImg.src = "img/sberbank.svg";

    // Обнулить логотип платежной системы
    var payImg = document.querySelector(".display-payment-logo img");
    payImg.src = "img/p-visa.jpg";

    // Обнулить имя
    var cardName = document.getElementsByClassName('display-name')[0];
    cardName.innerText = "Фамилия Имя";

    // Обнулить номер карты
    var cardNumber = document.getElementsByClassName('display-card-number')[0];
    cardNumber.innerText = "1230123012301230";

    // Обнулить срок действия
    var cardLifetime = document.getElementsByClassName('display-lifetime')[0];
    cardLifetime.innerText = "12/24";
}


// Сменить логотип банка на карте
function changeBankImg(){
    // Получаем элементы select банка и img банка
    let select = document.getElementsByName("bank-name")[0];
    let img = document.querySelector(".display-bank-logo img");
    
    // Получаем значение выбранного банка
    let bank = select.value;

    // Изменяем атрибут src у img в зависимости от значения
    switch (bank) {
        case "1":
            img.src = "img/sberbank.svg";
            break;
        case "2":
            img.src = "img/alfa-bank.svg";
            break;
        case "3":
            img.src = "img/otkritie-bank.svg";
            break;
        case "4":
            img.src = "img/tinkoff-bank.svg";
            break;
        case "5":
            img.src = "img/vtb-bank.svg";
            break;

        default:
            img.src = "img/sberbank.svg";
    }
}


// Сменить логотип платежной системы на карте
function changePaymentImg(){
    // Получаем элементы select платежной системы и img платежной системы
    var select = document.getElementsByName("payment-system-name")[0];
    var img = document.querySelector(".display-payment-logo img");
    
    // Получаем значение выбранного банка
    var payment = select.value;

    // Изменяем атрибут src у img в зависимости от значения
    switch (payment) {
        case "1":
            img.src = "img/p-visa.jpg";
            break;
        case "2":
            img.src = "img/p-master.jpg";
            break;
        case "3":
            img.src = "img/p-mir.jpg";
            break;

        default:
            img.src = "img/p-visa.jpg";
    }
}


// Сменить номер карты
function changeNumber(){
    // Получить введенный номер карты
    var number = document.getElementsByName('card-number')[0].value;
    
    // Получить элемент для изменения
    var cardNumber = document.getElementsByClassName('display-card-number')[0];

    

    // Изменить номер в карте
    cardNumber.innerText = number;
}

// Сменить имя держателя карты
function changeName(){
    // Получаем введенное имя из инпута
    var name = document.getElementsByName('card-fio')[0].value;

    // Получаем элемент в карте
    var cardName = document.getElementsByClassName('display-name')[0];

    // Преобразуем имя в верхний регистр
    name = name.toUpperCase();

    // Изменяем имя в карте
    cardName.innerText = name;


    
}


// Сменить срок действия карты
function changeLifetime(){
    // Получаем срок действия карты из инпута
    var lifetime = document.getElementsByName('card-lifetime')[0].value;

    // Получаем элемент
    var cardLifetime = document.getElementsByClassName('display-lifetime')[0];

    // Изменяем срок действия в карте
    cardLifetime.innerText = lifetime;
}