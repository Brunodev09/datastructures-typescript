export class Node {

    next?: Node;
    value?: any;

    constructor(value : any) {
        this.value = value;
    }

    getNext() {
        return this.next;
    }

    setNext(next : Node) {
        this.next = next;
    }

    setValue(val : any) {
        this.value = val;
    }
}


