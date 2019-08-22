export class Node {

    protected id: string;
    protected next?: Node;

    constructor(id : string) {
        this.id = id;
    }

    getNextNode() {
        return this.next;
    }

    setNext(next : Node) {
        this.next = next;
    }

    toString() {
        return this.id;
    }
}


