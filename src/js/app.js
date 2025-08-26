// import _ from "lodash";                            // import from NPM.
// import query from "./models/search";             // It is a default export.
// import { add } from "./views/searchView";        // It is a named export.
// import { multiPly as urjver } from "./views/searchView";   // It is a named export.
// // import { add, multiPly } from "./views/searchView";   // It is a named export.
// // import { add, multiPly } from "./views/searchView";   // It is a named export.

// console.log(query);

// console.log(`Sum of 2 numbers :  ${add(4, 6)}`);
// console.log(`Multiply of 2 numbers :  ${urjver(4, 6)}`);

import SearchRecipes from "./models/search";
import { elements, renderLoader, clearLoader } from "./views/base";
import * as searchView from "./views/searchView";
import Recipe from "./models/Recipe";
import { renderRecipe, clearRecipe } from "./views/recipeView";
import { highLightSelectedRecipe, removeHighLightSelectedRecipe } from "./views/recipeView";
import List from "./models/List";
import * as listView from "./views/listView"

// "btn search__btn"

const state = {};

const controlSearch = async () => {

    // 1. Вебээс хайлтын түлхүүр үгийг гаргаж авна.
    const query = searchView.getInput();

    console.log("Recieved query : " + query);

    if (query){
        // 2. Шинээр хайлтын объектыг үүсгэнэ.
        state.search = new SearchRecipes(query);

        // 3. Хайлт хийхэд зориулж дэлгэцийн UI бэлтгэнэ.

        searchView.clearSearch();
        searchView.clearSearchList();
        renderLoader(elements.Loader);

        // 4. Хайлтыг гүйцэтгэнэ.
        await state.search.doSearch();

        // 5. Хайлтын үр дүнг дэлгэцэнд үзүүлнэ.  
        
        // console.log(searchView.renderRecipes(state.search.result));
        
        // arr.length = state.search.result.length;
        clearLoader();
        if ( state.search.result.length === 0){
            alert("Hailt ilertsgui...");
        } else {
            searchView.renderRecipes(state.search.result);
        }
    }
}
elements.searchForm.addEventListener("submit", (event) => {
    event.preventDefault();
    console.log("Clicked");

    controlSearch();

    // console.log("Recieved query : " + getInput());
})

elements.pageButtons.addEventListener("click", (event) => {
    const button = event.target.closest(".btn-inline");

    if (button){
        const gotoPageNumber = parseInt(button.dataset.goto);
        searchView.clearSearchList();
        searchView.renderRecipes(state.search.result, gotoPageNumber);
    }
})

// Joriin Controller

const controlRecipe = async () => {
    
    const id = window.location.hash.replace("#", "");
    console.log(id);

    // 2.

    state.recipe = new Recipe(id);

    // 3. UI delgetsiig tseverlej beltgene.
    clearRecipe();
    renderLoader(elements.recipeDiv);
    highLightSelectedRecipe(id);

    // 4. Joriig tataj avchirna.

    await state.recipe.getRecipe();

    // 5.Joriig delgetsend gargana.
    clearLoader();
    renderRecipe(state.recipe);
    // console.log(state.recipe);
    console.log(state.recipe.ingredients);

}

window.addEventListener("hashchange", controlRecipe);
if ( state.recipe ) window.addEventListener("load", controlRecipe);



// let search = new SearchRecipes("pasta");

// search.doSearch().then(result => {
//     console.log(result);
// })

// console.log(recipes); 

// Nairlaganii Controller

const controlList = () => {
    // Nairlaganii model uusgene.
    state.list = new List;
    // for Test
    // window.tt = state.list;

    listView.clearItems();

    // Ug model ruu joriig hiine.
    state.recipe.ingredients.forEach(el => {
        const item = state.list.addItem(el);
        // console.log(el);
        listView.renderItem(item);

    });
}

elements.recipeDiv.addEventListener("click", el => {
    if (el.target.matches(".recipe__btn, .recipe__btn *")){
        controlList();
    }
});

// Sagsnaas ustgah
elements.shoppingDiv.addEventListener("click", el => {
    const id = el.target.closest(".shopping__item").dataset.itemid;

    // Oldson id-tai elementiig Model-s ustgana. !!! MODEL !!! not Display
    state.list.deleteItem(id);

    // Oldson id-tai elementiig Display-s ustgana. !!! DISPLAY !!! not MODEL
    listView.deleteItem(id);
})