const addBtn = document.getElementById('add')
const txtToDo = document.getElementById('txtToDo')
const itemsToDo = document.getElementById('itemsToDo')

addBtn.addEventListener('click', () => {
    if (txtToDo.value.length > 0) {
        itemsToDo.innerHTML += `<li class="liItems">
                                    <span>${txtToDo.value}</span>
                                    <button onclick="removeItemElement(parentElement)"><i class="fas fa-times"></i></button>
                                </li>`

        getShowingClearButton()

        txtToDo.value = ''
    }
    else {
        const alertContainer = document.querySelector('.alert-container')
        const alert = document.getElementById('alert')

        alert.innerText = 'Insira um item ao carrinho!'

        alertContainer.classList.add('error')

        setTimeout(function () {
            alertContainer.classList.remove('error')
        }, 4000)
    }
})

// Remover item
function removeItemElement(e) {
    e.remove()

    getShowingClearButton()
}

// Limpar lista
const clearList = document.getElementById('clear')

clearList.addEventListener('click', () => {
    const liItems = document.querySelectorAll('.liItems')

    liItems.forEach(e => {
        e.remove()
    })

    getShowingClearButton()
})

function getShowingClearButton() {
    const removeButton = document.querySelector('.remove-button')

    if (itemsToDo.childElementCount === 0) {
        removeButton.style.display = 'none'
    }
    else {
        removeButton.style.display = 'block'
    }
}