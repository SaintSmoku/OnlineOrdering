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
import { elements, renderLoader, clearLoader } from "./views/base"
import * as searchView from "./views/searchView";

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



// let search = new SearchRecipes("pasta");

// search.doSearch().then(result => {
//     console.log(result);
// })

// console.log(recipes); 