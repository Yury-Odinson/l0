// присваиваю DOM элементы в константы
// card 1
const card1 = document.getElementById("card1__item")
let priceCard1 = document.getElementById("card1__price")
let fpriceCard1 = document.getElementById("card1__fprice")
let amountCard1 = document.getElementById("card1__value")
const decrSumCard1 = document.getElementById("card1__decr")
const incrSumCard1 = document.getElementById("card1__incr")
const reminderCard1 = document.getElementById("card1__reminder").textContent
// card 2
const card2 = document.getElementById("card2__item")
let priceCard2 = document.getElementById("card2__price")
let fpriceCard2 = document.getElementById("card2__fprice")
let amountCard2 = document.getElementById("card2__value")
const decrSumCard2 = document.getElementById("card2__decr")
const incrSumCard2 = document.getElementById("card2__incr")
// card3
const card3 = document.getElementById("card3__item")
let priceCard3 = document.getElementById("card3__price")
let fpriceCard3 = document.getElementById("card3__fprice")
let amountCard3 = document.getElementById("card3__value")
const decrSumCard3 = document.getElementById("card3__decr")
const incrSumCard3 = document.getElementById("card3__incr")
const reminderCard3 = document.getElementById("card3__reminder").textContent
// inputs
const userFirstName = document.getElementById("data__firstName")
const userLastName = document.getElementById("data__lastName")
const userEmail = document.getElementById("data__email")
const userPhone = document.getElementById("data__phone")
const userINN = document.getElementById("data__inn")


const basketCheckAll = document.getElementById("basket__checkAll")
// baskets 
let totalPrice = document.getElementById("basket-header__totalPrice")
let totalFprice = document.getElementById("basket__fprice")
let totalDiscount = document.getElementById("basket__discount")
const checkboxBasketPaynow = document.getElementById("basket-checkbox-payNow")
const buttonBasketBuy = document.getElementById("basket__buttonOrder")

// функция выделения/снятия галочек на всех позициях товара
function checkAllGoods() {
    const element = document.querySelectorAll(".checkbox__card")
    element.forEach((e) => e.checked = !e.checked)
}
// getTotalPrice()
basketCheckAll.addEventListener("change", () => checkAllGoods())

// фиксирую цену за 1шт. для каждого из товаров
const onePrice = {
    card1: 522,
    card2: 10500,
    card3: 494
}

// фикцирую цену за 1шт. для каждого из товаров без скидки
const fullOnePrice = {
    card1: 1051,
    card2: 11450,
    card3: 950
}

// Присваиваю общую стоимость за позиции исходя из общего количества шт. за товар и его стоимость за 1 шт.
priceCard1.textContent = amountCard1.value * onePrice.card1
priceCard2.textContent = amountCard2.value * onePrice.card2
priceCard3.textContent = amountCard3.value * onePrice.card3

fpriceCard1.textContent = amountCard1.value * fullOnePrice.card1
fpriceCard2.textContent = amountCard2.value * fullOnePrice.card2
fpriceCard3.textContent = amountCard3.value * fullOnePrice.card3

totalPrice.textContent = Number(priceCard1.textContent) + Number(priceCard2.textContent) + Number(priceCard3.textContent)
totalFprice.textContent = Number(fpriceCard1.textContent) + Number(fpriceCard2.textContent) + Number(fpriceCard3.textContent)
totalDiscount.textContent = `- ${Number(totalFprice.textContent) - Number(totalPrice.textContent)}`

// функция декрементации. передаю в функцию количество шт
function decrementGoodValue(amount) {
    if (amount.value > 1) {
        amount.value = Number(amount.value) - 1;
        getTotalPrice()
    } else return
}

// функция инкрементации. передаю в функцию количество шт и количество остатка. если остаток товара не указан - следует передавать Infinity
function incrementGoodValue(amount, remind) {
    if (amount.value < remind) {
        amount.value = Number(amount.value) + 1;
        getTotalPrice()
    } else {
        alert(`Ошибка. Осталось ${remind} шт.`)
    }
}

// декрементирую/инкрементирую количество каждой позиции товара
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

// пересчитываю стоимость за позицию товара при изменении значения количества руками (не через кнопки +-)
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


// обновляю общее количество товаров в корзине
function getFullAmount() {
    const fullAmount = document.getElementById("basket__fullAmount")
    fullAmount.textContent = Number(amountCard1.value) + Number(amountCard2.value) + Number(amountCard3.value)
}

// Проверяю, нажат ли чекбокс для оплаты сразу
function checkPaynow() {
    if (checkboxBasketPaynow.checked) {
        buttonBasketBuy.textContent = `Оплатить ${totalPrice.textContent}`
    } else {
        buttonBasketBuy.textContent = "Заказать"
    }
}

// меняю значение чебокса оплаты сразу
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

// Проверяю наличие заполнений полей в разделе "Получатель"
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

const priceCards = [
    {
        "discountPrice": priceCard1.textContent,
        "normalPrice": fpriceCard1.textContent
    }, {
        "discountPrice": priceCard2.textContent,
        "normalPrice": fpriceCard2.textContent
    }, {
        "discountPrice": priceCard3.textContent,
        "normalPrice": fpriceCard3.textContent
    }
]


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
    buttonBasketBuy.textContent = totalPrice.textContent
}

getTotalPrice()
