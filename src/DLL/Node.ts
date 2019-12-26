export class Node {

    next?: Node;
    prev?: Node;
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

    getPrevious() {
        return this.prev;
    }

    setPrevious(prev : Node) {
        this.prev = prev;
    }

    setValue(val : any) {
        this.value = val;
    }
}


