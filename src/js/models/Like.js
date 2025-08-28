export default class Likes {
    constructor() {
        this.readDataFromLocalStorage();
        if (!this.likes) { this.likes = []; }
        
    }

    addLike(id, title, author, img){
        const like = {id, title, author, img};

        this.likes.push(like);

        // Storage ruu hadgallaa
        this.saveDataToLocalStorage();

        return like;
    }

    deleteLike(id){
        const index = this.likes.findIndex( (el) => el.id === id);

        this.likes.splice(index, 1);
    }

    isLike (id){
        if (this.likes.findIndex((el) => el.id === id) === -1){ return false}
        else{ return true}
    }

    getNumberOfLikes (){
        return this.likes.length;
    }

    saveDataToLocalStorage(){
        localStorage.setItem("likes", JSON.stringify(this.likes));
    }

    readDataFromLocalStorage(){
        this.likes = JSON.parse(localStorage.getItem("likes"));
    }
}
