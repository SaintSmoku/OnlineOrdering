import { elements } from "./base"

export const renderItem = (item) => {
    // console.log(item);
    const html = `<li class="shopping__item" data-itemid=${item.id}>
        <div class="shopping__count">
            <input type="number" value="${item.item.quantity !== null ? item.item.quantity : "" }" step="100">
                <p>${item.item.unit !== null ? item.item.unit : "" }</p>
        </div>
            <p class="shopping__description">${item.item.description}</p>
                <button class="shopping__delete btn-tiny">
                    <svg>
                        <use href="img/icons.svg#icon-circle-with-cross"></use>
                    </svg>
                </button>
    </li>`

    elements.shoppingDiv.insertAdjacentHTML("beforeend", html);
}

export const clearItems = () => {
    elements.shoppingDiv.innerHTML = "";
}

export const deleteItem = (id) => {
    const item = document.querySelector(`[data-itemid="${id}"]`)
    // console.log(item);
    item.parentNode.removeChild(item);
}