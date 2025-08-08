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

let search = new SearchRecipes("pasta");

search.doSearch().then(result => {
    console.log(result);
})

// console.log(recipes); 