function button() {
    let buttonAdd = document.createElement("button");
    let right_button = document.createElement('button')
    buttonAdd.onclick = () => {
        if (cart.includes(elem.id)) {
            let idx = cart.indexOf(elem.id)
            cart.splice(idx, 1)
            buttonAdd.classList.remove('active')
            buttonAdd.innerHTML = "В избранное"
        } else {
            cart.push(elem.id)
            buttonAdd.classList.add('active')
            buttonAdd.innerHTML = "Добавлено"

        }
        cart_realod(cart)
        h1.innerHTML = `Cart: ${cart.length}`
        right_button.onclick = () => {
            let idx = cart.indexOf(item.id)
            cart.splice(idx, 1)
            arr.find(el => el.id == elem.id).cart = false
            cart_item.remove()
           
        }
    }
}