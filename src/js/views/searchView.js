import { elements } from "./base";

const renderRecipe = (recipe) => {
    // console.log(recipe.title);

    const markUp = `<li>
                    <a class="results__link" href="#${recipe.id}">
                        <figure class="results__fig">
                            <img src=${recipe.image_url} alt="Test">
                        </figure>
                        <div class="results__data">
                            <h4 class="results__name">${recipe.title}</h4>
                            <p class="results__author">${recipe.publisher}</p>
                        </div>
                    </a>
                </li>`

    // UL ruu hiine.
    elements.searchResultList.insertAdjacentHTML('beforeend', markUp);
    elements.pageButtons.innerHTML = "";
}
export const clearSearch = () => {
    elements.searchInput.value = "";
}
export const clearSearchList = () => {
    elements.searchResultList.innerHTML = "";
}
export const getInput = () => { return elements.searchInput.value; }
export const renderRecipes = (recipes, currentPage = 1, resultPerPage = 10) => { 
    
    // Hailtiin ur dung huudaslaj uzuuleh

    // page = 2, start = 10, end = 20;
    const start = (currentPage - 1) * resultPerPage;
    const end = (currentPage) * resultPerPage;
    recipes.slice(start, end).forEach( element => {
        renderRecipe(element);
    });

   
    const totalPages = Math.ceil(recipes.length / resultPerPage);
    renderButtons(currentPage, totalPages);
 }

// console.log("Result : " + query);

const createButton = (page, type, direction) => {
return ` <button class="btn-inline results__btn--${type}" data-goto=${page}>
            <svg class="search__icon">
              <use href="img/icons.svg#icon-triangle-${direction}"></use>
            </svg>
            <span>Хуудас ${page}</span>
          </button>`
}

const renderButtons = (currentPage, totalPages) => {
    let button;

    if (currentPage === 1 & totalPages > 1) {
        // 1-r huudsand bna, daraagiin huudas baihgui, 2-r huudas garahgui 
        button = createButton(2, "next", "right");
    } else if (currentPage < totalPages){
        // Dund huudsand bna, daraagiin huudas bolon umnuh huudas bna.
        button = createButton(currentPage - 1, "prev", "left");
        button += createButton(currentPage + 1, "next", "right");
    } else if (currentPage === totalPages){
        // Suulchiin huudsand bna, daraagiin huudas baihgui, zuvhun umnuh huudas bna.
        button = createButton(currentPage - 1, "prev", "left");
    }

    elements.pageButtons.insertAdjacentHTML("afterbegin", button);
}
