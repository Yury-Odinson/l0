import { priceCard1, fpriceCard1, amountCard1, decrSumCard1, incrSumCard1, reminderCard1, priceCard2, fpriceCard2, amountCard2, decrSumCard2, incrSumCard2, priceCard3, fpriceCard3, amountCard3, decrSumCard3, incrSumCard3, userFirstName, userLastName, userEmail, userPhone, userINN, basketCheckAll, totalPrice, totalFprice, totalDiscount, checkboxBasketPaynow, buttonBasketBuy, modalBackground, modalPayOpen, modalPayClose, modalSetPay, modalSetDelivery, modalDeliveryOpen, modalDeliveryClose, deliveryButtonPikup, deliveryMethodPickUp, deliveryMethodCourier } from "./declarations.js"

// функция выделения/снятия галочек на всех позициях товара
function checkAllGoods() {
    const element = document.querySelectorAll(".checkbox__card")
    element.forEach((e) => e.checked = !e.checked)
}

basketCheckAll.addEventListener("change", () => checkAllGoods())

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

// декрементация/инкрементация количества каждой позиции товара
decrSumCard1.addEventListener("click", () => {
    decrementGoodValue(amountCard1);
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
    incrementGoodValue(amountCard3, reminderCard1);
    priceCard3.textContent = amountCard3.value * onePrice.card3
    fpriceCard3.textContent = amountCard3.value * fullOnePrice.card3
    getTotalPrice()
    getFullAmount()
})

// пересчёт стоимости за позицию товара, при изменении значения количества в ручную (не через кнопки +-)
amountCard1.addEventListener("change", () => {
    if (amountCard1.value >= 1) {
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
    if (amountCard3.value >= 1) {
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
    const innDescription = document.getElementById("data__innDescription")
    if (element.value === "") {
        element.classList.add("recipient__dataError")
        elementHelp.style.display = "block"
        input === "data__inn" ? innDescription.style.display = "none" : innDescription.style.display = "block" // если ошибочное поле является ИНН, то скрываем строку "Для таможенного оформления"
        scrollTo(0, 1000) // в случае, если есть пустое поле, то страница прокручивается вниз до блока с данными, где есть пустые поля
    } else {
        element.classList.remove("recipient__dataError")
        elementHelp.style.display = "none"
    }
}

// проверка наличия заполнений полей в разделе "Получатель"
function checkUserData() {
    checkInput("data__firstName")
    checkInput("data__lastName")
    checkInput("data__email")
    checkInput("data__phone")
    checkInput("data__inn")
}

// события на изменение полей данных
userFirstName.addEventListener("change", () => {
    document.getElementById("data__firstNameClue").style.display = "block"
})

userLastName.addEventListener("change", () => {
    document.getElementById("data__lastNameClue").style.display = "block"
})

userEmail.addEventListener("change", () => {
    document.getElementById("data__EmailClue").style.display = "block"
})

userPhone.addEventListener("change", () => {
    document.getElementById("data__phoneClue").style.display = "block"
})

userINN.addEventListener("change", () => {
    document.getElementById("data__innClue").style.display = "block"
})

buttonBasketBuy.addEventListener("click", () => checkUserData())


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
