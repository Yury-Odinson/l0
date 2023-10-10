import { mobileMenu, modalBackground, modalPayOpen, modalDeliveryOpen, modalPayClose, modalDeliveryClose, deliveryButtonPikup, deliveryButtonCourier, deliveryMethodPickUp, deliveryMethodCourier, defaultMethodDelivery, methodDeliveryCurrent, modalSetDelivery, basketDeliveryOption, deliveryOption, deliveryPick1, deliveryPick2, delivery1, delivery2, delivery3, methodPayCurrent, defaultMethodPay, pay1, pay2, pay3, pay4, modalSetPay, modalRemoveAddress } from "./declarations.js"

// файл для работы модальных окон
// функция открытия модальных окон 
function openModal(modalName) {
    const window = document.getElementById(modalName)
    modalBackground.style.display = "block"
    window.style.display = "block"
    mobileMenu.style.display = "none"
}

// открытие модального окна по клику на каждую из кнопок открытия
modalPayOpen.forEach((element) => {
    element.addEventListener("click", () => openModal("modal-pay"))
})
modalDeliveryOpen.forEach((element) => {
    element.addEventListener("click", () => openModal("modal-delivery"))
})

// функция закрытия модальных окон 
function closeModal(modalName) {
    const window = document.getElementById(modalName)
    modalBackground.style.display = "none"
    window.style.display = "none"
    mobileMenu.style.display = "flex"
}

// закрытие модальные окна 
modalPayClose.addEventListener("click", () => closeModal("modal-pay"))
modalDeliveryClose.addEventListener("click", () => closeModal("modal-delivery"))

// возможность закрытия модальных окон по клику на фон
modalBackground.addEventListener("click", () => {
    const windows = document.querySelectorAll(".modal")
    windows.forEach((window) => window.style.display = "none")
    modalBackground.style.display = "none"
})
// обновление отображения варианта доставки на странице (в двух местах)
methodDeliveryCurrent.forEach((element) => {
    element.appendChild(defaultMethodDelivery.cloneNode(true))
})

// индекс варианта доставки из списка
let numberDilivery = 1
// метод доставки (delivery__methodPickup - в пункт выдачи / delivery__method курьером)
let methodDelivery = "delivery__method"

// установка индекса по клику на один из чекбоксов варианта доставки
deliveryPick1.addEventListener("click", () => numberDilivery = 1)
deliveryPick2.addEventListener("click", () => numberDilivery = 2)
delivery1.addEventListener("click", () => numberDilivery = 1)
delivery2.addEventListener("click", () => numberDilivery = 2)
delivery3.addEventListener("click", () => numberDilivery = 3)

// меняем пункты меню в модальном окне доставки (доставка в пункт выдачи/доставка курьером)
deliveryButtonPikup.addEventListener("click", () => {
    deliveryButtonPikup.classList.add("modal-delivery-method__ActiveItem")
    deliveryButtonCourier.classList.remove("modal-delivery-method__ActiveItem")
    deliveryMethodPickUp.style.display = "flex"
    deliveryMethodCourier.style.display = "none"
    methodDelivery = "delivery__methodPickup"
})

deliveryButtonCourier.addEventListener("click", () => {
    deliveryButtonPikup.classList.remove("modal-delivery-method__ActiveItem")
    deliveryButtonCourier.classList.add("modal-delivery-method__ActiveItem")
    deliveryMethodPickUp.style.display = "none"
    deliveryMethodCourier.style.display = "flex"
    methodDelivery = "delivery__method"
})

// функция установки варианта доставки
function setDeliveryMethod(method, methodNum) {
    const methodDelivery = document.getElementById(method + methodNum)
    const deliveryPickupInfo = document.querySelectorAll(".delivery-string-address__info")
    switch (method + methodNum) {
        case `delivery__methodPickup${methodNum}`:
            methodDeliveryCurrent.forEach((element) => {
                element.innerHTML = ""
                element.appendChild(methodDelivery.cloneNode(true))
            })
            basketDeliveryOption.textContent = "Доставка в пункт выдачи"
            deliveryOption.textContent = "Пункт выдачи"
            deliveryPickupInfo.forEach((element) => element.style.display = "flex")
            break
        case `delivery__method${methodNum}`:
            methodDeliveryCurrent.forEach((element) => {
                element.innerHTML = ""
                element.appendChild(methodDelivery.cloneNode(true))
            })
            basketDeliveryOption.textContent = "Доставка курьером"
            deliveryOption.textContent = "Доставка курьером"
            deliveryPickupInfo.forEach((element) => element.style.display = "none")
            break
    }
}

// функция применения варианта доставки и закрытия модального окна
modalSetDelivery.addEventListener("click", () => {
    setDeliveryMethod(methodDelivery, numberDilivery)
    closeModal("modal-delivery")
})

// отображение выбора оплаты по умолчанию (в двух местах)
methodPayCurrent.forEach((element) => {
    element.appendChild(defaultMethodPay.cloneNode(true))
})

// индекс метода оплаты
let numberPayMethod = 1

// функция смены способа оплаты
function setPayMethod(numPayCard) {
    const methodPay = document.getElementById(`pay__method${numPayCard}`).cloneNode(true)
    methodPayCurrent.forEach((element) => {
        element.innerHTML = ""
        element.appendChild(methodPay.cloneNode(true))
    })
}

// присвоение индекса выбора оплаты
pay1.addEventListener("click", () => numberPayMethod = 1)
pay2.addEventListener("click", () => numberPayMethod = 2)
pay3.addEventListener("click", () => numberPayMethod = 3)
pay4.addEventListener("click", () => numberPayMethod = 4)

// функция установления оплаты и закрытия модального окна
modalSetPay.addEventListener("click", () => {
    setPayMethod(numberPayMethod)
    closeModal("modal-pay")
})

// удаление адресов доставки
modalRemoveAddress.forEach((button) => {
    button.addEventListener("click", () => {
        const addresses = document.querySelectorAll(".modal-delivery-body__label")
        console.log(addresses.length)
        if (addresses.length >= 2) {
            button.closest(".modal-delivery-body__label").remove()
        } else alert("Нужно оставить хотя бы 1 адрес!")
    })
})
