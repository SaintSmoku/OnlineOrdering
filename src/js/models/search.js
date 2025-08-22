import axios from "axios";

export default class Search{
    constructor(query){
        this.query = query;
    }

    async doSearch(){
    try {
        let result = await axios.get("https://forkify-api.herokuapp.com/api/v2/recipes?search=" + this.query);
        this.result = result.data.data.recipes;
        
        // result = await axios.get("https://forkify-api.herokuapp.com/api/v2/recipes/" + recipes[1].id);
        return this.result;
    } catch (error) {
        console.log(`An error occured ${error}`)
        alert(`An error occured ${error}`)
        }
    }
}