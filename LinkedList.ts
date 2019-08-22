import {Node} from "./Node";

export class LinkedList {

    protected current: Node | undefined;

    next() {
        if (!this.current) return;
        this.current = this.current.getNextNode();

        return this.current;
    }

    getNode() {
        return this.current;
    }

    hasNextPointer() {
        if (!this.current) return;
        return this.current.getNextNode();
    }

    insert(node: Node) {
        this.current = node;
    }
}





