import uniqid from "uniqid";

export default class List {
    constructor(){
        this.items = [];
    }

    deleteItem (id){
        // id-tai ortsiin indexiig array-s haij olno.
        const index = this.items.findIndex(el => {
            el.id === id;
        });
        // ug elementiig array-s ustgana.
        this.items.splice(index, 1);
    }

    addItem(item){
        let newItems = {
            id : uniqid(),
            item : item   
        }
        this.items.push(newItems);

        return newItems;
    }
}