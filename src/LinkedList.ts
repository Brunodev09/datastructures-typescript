import {Node} from "./Node";

export class LinkedList {

    protected head: Node | null = null;
    protected tail: Node | null = null;
    protected length: number = 0;

    get(i : number) {
        if (i < 0 || i >= this.length) return null;
        let counter = 0;
        let current = this.head;
        while (counter !== i) {
            current = current.getNext();
            counter++;
        }
        return current;
    }

    set(value: any, i : number) {
        let node = this.get(i);
        if (!node) return false;
        node.value = value;
        return true;
    }

    push(value : any) : LinkedList {
        const node = new Node(value);
        if (!this.head) {
            this.head = node;
            this.tail = node;
        }
        else {
            (<Node> this.tail).setNext(node);
            this.tail = node;
        }
        this.length++;
        return this;
    }

    pop() {
        if (!this.head) return undefined;
        let current = this.head;
        let newTail = current;
        while (current.getNext()) {
            current = current.getNext();
        }
        this.tail = newTail;
        this.tail.setNext(null);
        this.length--;
        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }
    }

    traverse() : any {
        if (!this.head) return null;
        let current: any = this.head;
        while (current) {
            console.log(current.value);
            current = current.getNext();
        }
    }


}





