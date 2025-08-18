import axios from "axios";

export default class Recipe {
    constructor(id){
        this.id = id;
    }

// cooking_time: 75
// id: "664c8f193e7aa067e94e897b"
// image_url: "http://forkify-api.herokuapp.com/images/2150654_MEDIUM6068.jpg"
// ingredients: (12) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
// publisher: "BBC Good Food"
// servings: 4
// source_url: "http://www.bbcgoodfood.com/recipes/2150654/pizza-bianco-with-artichoke-hearts"
// title: "Pizza bianco with artichoke hearts"

    async getRecipe(){
        let result = await axios.get("https://forkify-api.herokuapp.com/api/v2/recipes/" + this.id);

        // this.result = result.data.data.recipe;

        this.cooking_time = result.data.data.recipe.cooking_time;
        this.image_url = result.data.data.recipe.image_url;
        this.ingredients = result.data.data.recipe.ingredients;
        this.publisher = result.data.data.recipe.publisher;
        this.servings = result.data.data.recipe.servings;
        this.title = result.data.data.recipe.title;
        this.source_url = result.data.data.recipe.source_url;
        // this.result = 0;

        // console.log(result)
        // return this.result;
    }
}