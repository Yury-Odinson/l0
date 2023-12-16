import { basketCount, mobileBasketCount, checkboxConfirmOffer, priceCard1, fpriceCard1, amountCard1, decrSumCard1, incrSumCard1, reminderCard1, reminderCard3, priceCard2, fpriceCard2, amountCard2, decrSumCard2, incrSumCard2, priceCard3, fpriceCard3, amountCard3, decrSumCard3, incrSumCard3, userFirstName, userLastName, userEmail, userPhone, userINN, basketCheckAll, totalPrice, totalFprice, totalDiscount, checkboxBasketPaynow, buttonBasketBuy, userEmailError, userPhoneError, userINNError, userINNDescription, hideAllCards, hideAllMissings, buttonRemoveCard } from "./declarations.js"

// подсчёт и отображение количества товаров в корзине
function setBasketGoodsValue() {
    const value = document.querySelectorAll(".card-item").length
    if (value > 0) {
        basketCount.textContent = value
        mobileBasketCount.textContent = value
    } else {
        document.querySelectorAll(".header-navbar__BasketCount").forEach((element) => element.style.display = "none")
    }
}
setBasketGoodsValue()

// выделение/снятие галочек на всех позициях товара
basketCheckAll.addEventListener("change", () => {
    const element = document.querySelectorAll(".checkbox__card")
    if (basketCheckAll.checked) {
        element.forEach((e) => e.checked = true)
    } else {
        element.forEach((e) => e.checked = false)
    }
})

// переменные, хранящие статус отображения блоков
let displayAllCards = true
let displayAllMissings = true

// функция показать/скрыть блок. block - элементы, которые необходимо скрыть; button - кнопка, для которой меняем стиль; isHide - проверяем скрыты элементы или нет
function hideCards(block, button, isHide) {
    const cards = document.querySelectorAll(block)
    if (isHide) {
        cards.forEach((element) => {
            element.style.display = "flex"
            button.classList.remove("buttonHide")
        })
    } else {
        cards.forEach((element) => {
            element.style.display = "none"
            button.classList.add("buttonHide")
        })
    }
}

// показать/скрыть блоки 
hideAllCards.addEventListener("click", () => {
    displayAllCards = !displayAllCards
    hideCards(".card-item", hideAllCards, displayAllCards)
})

hideAllMissings.addEventListener("click", () => {
    displayAllMissings = !displayAllMissings
    hideCards(".missing__item", hideAllMissings, displayAllMissings)
})

// фиксированная цена за 1шт. для каждого из товаров
const onePrice = {
    card1: 522,
    card2: 10500,
    card3: 494
}

// фиксированная цена за 1шт. для каждого из товаров без скидки
const fullOnePrice = {
    card1: 1051,
    card2: 11450,
    card3: 950
}

// присвоение общей стоимости за позицию товара, исходя из общего количества шт. за товар и его стоимость за 1 шт.
priceCard1.textContent = amountCard1.value * onePrice.card1
priceCard2.textContent = amountCard2.value * onePrice.card2
priceCard3.textContent = amountCard3.value * onePrice.card3

fpriceCard1.textContent = amountCard1.value * fullOnePrice.card1
fpriceCard2.textContent = amountCard2.value * fullOnePrice.card2
fpriceCard3.textContent = amountCard3.value * fullOnePrice.card3

totalPrice.textContent = Number(priceCard1.textContent) + Number(priceCard2.textContent) + Number(priceCard3.textContent)
totalFprice.textContent = Number(fpriceCard1.textContent) + Number(fpriceCard2.textContent) + Number(fpriceCard3.textContent)
totalDiscount.textContent = `- ${Number(totalFprice.textContent) - Number(totalPrice.textContent)}`

// функция декрементации. передача в функцию количество штук
function decrementGoodValue(amount) {
    if (amount.value > 1) {
        amount.value = Number(amount.value) - 1;
        getTotalPrice()
    } else return
}

// функция инкрементации. передача в функцию количество штук и количество остатка. если остаток товара не указан - следует передавать Infinity
function incrementGoodValue(amount, remind) {
    if (amount.value < remind) {
        amount.value = Number(amount.value) + 1;
        getTotalPrice()
    } else {
        alert(`Ошибка. Осталось ${remind} шт.`)
    }
}

// decrSumCard2.setAttribute("disabled", "disabled")

function checkDisableButton(id) {

}

// декрементация/инкрементация количества каждой позиции товара
decrSumCard1.addEventListener("click", () => {
    decrementGoodValue(amountCard1);
    // decrSumCard1.style.color = "#9797AF"
    priceCard1.textContent = amountCard1.value * onePrice.card1
    fpriceCard1.textContent = amountCard1.value * fullOnePrice.card1
    getTotalPrice()
    getFullAmount()
})

incrSumCard1.addEventListener("click", () => {
    incrementGoodValue(amountCard1, reminderCard1);
    priceCard1.textContent = amountCard1.value * onePrice.card1
    fpriceCard1.textContent = amountCard1.value * fullOnePrice.card1
    getTotalPrice()
    getFullAmount()
})

decrSumCard2.addEventListener("click", () => {
    decrementGoodValue(amountCard2);
    priceCard2.textContent = amountCard2.value * onePrice.card2
    fpriceCard2.textContent = amountCard2.value * fullOnePrice.card2
    getTotalPrice()
    getFullAmount()
})

incrSumCard2.addEventListener("click", () => {
    incrementGoodValue(amountCard2, Infinity);
    priceCard2.textContent = amountCard2.value * onePrice.card2
    fpriceCard2.textContent = amountCard2.value * fullOnePrice.card2
    getTotalPrice()
    getFullAmount()
})

decrSumCard3.addEventListener("click", () => {
    decrementGoodValue(amountCard3);
    priceCard3.textContent = amountCard3.value * onePrice.card3
    fpriceCard3.textContent = amountCard3.value * fullOnePrice.card3
    getTotalPrice()
    getFullAmount()
})

incrSumCard3.addEventListener("click", () => {
    incrementGoodValue(amountCard3, reminderCard3);
    priceCard3.textContent = amountCard3.value * onePrice.card3
    fpriceCard3.textContent = amountCard3.value * fullOnePrice.card3
    getTotalPrice()
    getFullAmount()
})

// пересчёт стоимости за позицию товара, при изменении значения количества в ручную (не через кнопки +-)
amountCard1.addEventListener("change", () => {
    if (amountCard1.value >= 1 && amountCard1.value < reminderCard1) {
        priceCard1.textContent = amountCard1.value * onePrice.card1
        fpriceCard1.textContent = amountCard1.value * fullOnePrice.card1
        getFullAmount()
        getTotalPrice()
    } else {
        amountCard1.value = 1
        priceCard1.textContent = onePrice.card1
        fpriceCard1.textContent = fullOnePrice.card1
        getFullAmount()
        getTotalPrice()
    }
})
amountCard2.addEventListener("change", () => {
    if (amountCard2.value >= 1) {
        priceCard2.textContent = amountCard2.value * onePrice.card2
        fpriceCard2.textContent = amountCard2.value * fullOnePrice.card2
        getFullAmount()
        getTotalPrice()
    } else {
        amountCard2.value = 1
        priceCard2.textContent = onePrice.card2
        fpriceCard2.textContent = fullOnePrice.card2
        getFullAmount()
        getTotalPrice()
    }
})
amountCard3.addEventListener("change", () => {
    if (amountCard3.value >= 1 && amountCard3.value < reminderCard3) {
        priceCard3.textContent = amountCard3.value * onePrice.card3
        fpriceCard3.textContent = amountCard3.value * fullOnePrice.card3
        getFullAmount()
        getTotalPrice()
    } else {
        amountCard3.value = 1
        priceCard3.textContent = onePrice.card3
        fpriceCard3.textContent = fullOnePrice.card3
        getFullAmount()
        getTotalPrice()
    }
})

// обновление общего количество товаров в корзине
function getFullAmount() {
    const fullAmount = document.getElementById("basket__fullAmount")
    fullAmount.textContent = Number(amountCard1.value) + Number(amountCard2.value) + Number(amountCard3.value)
}
getFullAmount()

// проверка, нажат ли чекбокс для оплаты сразу
function checkPaynow() {
    if (checkboxBasketPaynow.checked) {
        buttonBasketBuy.textContent = `Оплатить ${totalPrice.textContent} com`
    } else {
        buttonBasketBuy.textContent = "Заказать"
    }
}

// замена значения чебокса оплаты сразу
checkboxBasketPaynow.addEventListener("change", () => checkPaynow())

// функция-обработчик ошибок на не заполенные поля в разделе "Получатель"
function checkInput(input) {
    const element = document.getElementById(input)
    const elementHelp = document.getElementById(`${input}Help`)
    const innDescription = document.getElementById("data__inn-description")
    if (element.value === "") {
        element.classList.add("recipient__data-error")
        elementHelp.style.display = "block"
        input === "data__inn" ? innDescription.style.display = "none" : innDescription.style.display = "block" // если ошибочное поле является ИНН, то скрываем строку "Для таможенного оформления"
        document.querySelector(".container-main-recipient").scrollIntoView() // в случае, если есть пустое поле, то страница прокручивается до блока с данными, где есть пустые поля
    } else {
        element.classList.remove("recipient__data-error")
        elementHelp.style.display = "none"
    }
}

// установка по умолчанию принятия оферты
let statusButtonBuy = true
// установка атрибута disabled при несогласии с офертой
checkboxConfirmOffer.addEventListener("change", () => {
    statusButtonBuy = !statusButtonBuy
    if (statusButtonBuy) {
        buttonBasketBuy.removeAttribute("disabled", "disabled")
    } else {
        buttonBasketBuy.setAttribute("disabled", "disabled")
    }
})

buttonBasketBuy.addEventListener("click", () => checkUserData())

// проверка наличия заполнений полей в разделе "Получатель"
function checkUserData() {
    if (statusButtonBuy) {
        checkInput("data__firstname")
        checkInput("data__lastname")
        checkInput("data__email")
        checkInput("data__phone")
        checkInput("data__inn")
    } else return
}

// события на изменение полей данных
userFirstName.addEventListener("change", () => {
    document.getElementById("data__firstname-clue").style.display = "block"
})

userLastName.addEventListener("change", () => {
    document.getElementById("data__lastname-clue").style.display = "block"
})

userEmail.addEventListener("change", () => {
    document.getElementById("data__email-clue").style.display = "block"
})

userPhone.addEventListener("change", () => {
    document.getElementById("data__phone-clue").style.display = "block"
})

userINN.addEventListener("change", () => {
    document.getElementById("data__inn-clue").style.display = "block"
})



// функция добавления пробелом между числами
function addSpaces(price) {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")
}

// функция подсчёта итоговой суммы на покупку
function getTotalPrice() {
    // константы для математических операций
    const resultPriceCard1 = Number(priceCard1.textContent.replace(/\s/g, '')) // убираем пробелы в числе для дальнейших мат. операций
    const resultPriceCard2 = Number(priceCard2.textContent.replace(/\s/g, ''))
    const resultPriceCard3 = Number(priceCard3.textContent.replace(/\s/g, ''))
    const resultFpriceCard1 = Number(fpriceCard1.textContent.replace(/\s/g, ''))
    const resultFpriceCard2 = Number(fpriceCard2.textContent.replace(/\s/g, ''))
    const resultFpriceCard3 = Number(fpriceCard3.textContent.replace(/\s/g, ''))
    const resultTotalPrice = resultPriceCard1 + resultPriceCard2 + resultPriceCard3 // суммируем итоговую цену
    const resultTotalFprice = resultFpriceCard1 + resultFpriceCard2 + resultFpriceCard3 // суммируем итоговую цену (без скидки)
    priceCard1.textContent = addSpaces(resultPriceCard1) // отображаем суммы на экран (с пробелами)
    priceCard2.textContent = addSpaces(resultPriceCard2)
    priceCard3.textContent = addSpaces(resultPriceCard3)
    fpriceCard1.textContent = addSpaces(resultFpriceCard1)
    fpriceCard2.textContent = addSpaces(resultFpriceCard2)
    fpriceCard3.textContent = addSpaces(resultFpriceCard3)
    totalPrice.textContent = addSpaces(resultTotalPrice)
    totalFprice.textContent = addSpaces(resultTotalFprice)
    totalDiscount.textContent = `- ${addSpaces(resultTotalFprice - resultTotalPrice)}`
}

getTotalPrice()

// регулярные выражения для проверки валидности данных
const patternEmail = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
const patternPhone = /(\+7|8)[\s(]?(\d{3})[\s)]?(\d{3})[\s]?(\d{2})[\s]?(\d{2})/g;

// функция проверки на валидность данных. dataREGEXP - метод проверки, value - значение для проверки
function isValidData(dataREGEXP, value) {
    return dataREGEXP.test(value);
}

// проверка на валидность электронной почты
function checkEmail() {
    if (isValidData(patternEmail, userEmail.value)) {
        userEmailError.style.display = "none";
    } else {
        userEmailError.style.display = "block";
    }
}

userEmail.addEventListener("change", checkEmail);

// проверка на валидность номера телефона
function checkPhone() {
    if (isValidData(patternPhone, userPhone.value)) {
        userPhoneError.style.display = "none";
    } else {
        userPhoneError.style.display = "block";
    }
}

// автоматическое добавление +7 при наводке на инпут, если строка пустая
userPhone.addEventListener("focus", () => {
    if (userPhone.value === "") {
        userPhone.value = "+7"
    }
})

// автоматическое выставление пробелов при корректном вводе номера телефона (начиная с 8 или +7)
userPhone.addEventListener("input", () => {
    userPhone.value.replace(patternPhone, '<a href="tel:+7$2$3$4$5">+7 $2 $3 $4 $5</a>');
    let phoneNumbers = userPhone.value.match(patternPhone);
    let correctNumber = phoneNumbers[0].replace(patternPhone, '+7 $2 $3 $4 $5');    // пробуем замену
    userPhone.value = correctNumber
})

userPhone.addEventListener("change", checkPhone);

// проверка на длину введённых данных. нельзя ввести больше 14 символов
userINN.addEventListener("input", () => {
    if (userINN.value.length > 14) {
        userINN.value = userINN.value.substr(0, 14)
    }
})

// при наличии ошибки в поле ИНН - появляется уведомление
userINN.addEventListener("change", () => {
    if (userINN.value.length < 14) {
        userINNError.style.display = "block"
        userINNDescription.style.display = "none"
    } else {
        userINNError.style.display = "none"
    }
})

// удаление карточки товара
buttonRemoveCard.forEach((element) => {
    element.addEventListener("click", () => {
        if (element.closest(".card-item")) {
            element.closest(".card-item").remove()
        } else {
            element.closest(".card-item-missing").remove()
        }
        setBasketGoodsValue()
    })
})
