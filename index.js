// присваиваю DOM элементы в константы
// card 1
const card1 = document.getElementById("card1__item")
let priceCard1 = document.getElementById("card1__price")
let amountCard1 = document.getElementById("card1__value")
const decrSumCard1 = document.getElementById("card1__decr")
const incrSumCard1 = document.getElementById("card1__incr")
const reminderCard1 = document.getElementById("card1__reminder").textContent
// card 2
const card2 = document.getElementById("card2__item")
let priceCard2 = document.getElementById("card2__price")
let amountCard2 = document.getElementById("card2__value")
const decrSumCard2 = document.getElementById("card2__decr")
const incrSumCard2 = document.getElementById("card2__incr")
// card3
const card3 = document.getElementById("card3__item")
let priceCard3 = document.getElementById("card3__price")
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
// checkboxes
const basketCheckAll = document.getElementById("basket__checkAll")
const checkboxBasketPaynow = document.getElementById("basket-checkbox-payNow")
let totalPrice = document.getElementById("basket-header__totalPrice")
const buttonBasketBuy = document.getElementById("basket__buttonOrder")

// функция выделения/снятия галочек на всех позициях товара
function checkAllGoods() {
    const element = document.querySelectorAll(".checkbox__card")
    element.forEach((e) => e.checked = !e.checked)
}
// getTotalPrice()
basketCheckAll.addEventListener("change", () => checkAllGoods())

// фиксирую цену за 1шт. для каждого из товаров
const priceForOne = {
    card1: 522,
    card2: 10500,
    card3: 494
}

// Присваиваю общую стоимость за позиции исходя из общего количества шт. за товар и его стоимость за 1 шт.
priceCard1.textContent = Number(amountCard1.value) * priceForOne.card1
priceCard2.textContent = Number(amountCard2.value) * priceForOne.card2
priceCard3.textContent = Number(amountCard3.value) * priceForOne.card3
totalPrice.textContent = Number(priceCard1.textContent) + Number(priceCard2.textContent) + Number(priceCard3.textContent)
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
    priceCard1.textContent = Number(amountCard1.value) * priceForOne.card1;
    getTotalPrice();
})

incrSumCard1.addEventListener("click", () => {
    incrementGoodValue(amountCard1, reminderCard1);
    priceCard1.textContent = Number(amountCard1.value) * priceForOne.card1;
    getTotalPrice();
})

decrSumCard2.addEventListener("click", () => {
    decrementGoodValue(amountCard2);
    priceCard2.textContent = Number(amountCard2.value) * priceForOne.card2;
    getTotalPrice();
})

incrSumCard2.addEventListener("click", () => {
    incrementGoodValue(amountCard2, Infinity);
    priceCard2.textContent = Number(amountCard2.value) * priceForOne.card2;
    getTotalPrice();
})

decrSumCard3.addEventListener("click", () => {
    decrementGoodValue(amountCard3);
    priceCard3.textContent = Number(amountCard3.value) * priceForOne.card3;
    getTotalPrice();
})

incrSumCard3.addEventListener("click", () => {
    incrementGoodValue(amountCard3, reminderCard1);
    priceCard3.textContent = Number(amountCard3.value) * priceForOne.card3;
    getTotalPrice();
})

// пересчитываю стоимость за позицию товара при изменении значения количества руками (не через кнопки +-)
amountCard1.addEventListener("change", () => {
    console.log(priceCard1.textContent = amountCard1.value * priceForOne.card1)
    getTotalPrice()
})
amountCard2.addEventListener("change", () => {
    priceCard2.textContent = amountCard2.value * priceForOne.card2
    getTotalPrice()
})
amountCard3.addEventListener("change", () => {
    priceCard3.textContent = amountCard3.value * priceForOne.card3
    getTotalPrice()
})

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


// функция подсчёта итоговой суммы на покупку
function getTotalPrice() {
    totalPrice.textContent = Number(priceCard1.textContent) + Number(priceCard2.textContent) + Number(priceCard3.textContent)
}
