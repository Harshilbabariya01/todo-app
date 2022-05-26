class todo {
    id: string;
    text: string;

    constructor(todotext: string) {
        this.id = new Date().toString();
        this.text = todotext;
    }
}

export default todo;