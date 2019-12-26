import {Node} from "./Node";

export class LinkedList {

    protected head: Node | null = null;
    protected tail: Node | null = null;
    protected length: number = 0;

    get(i : number) : Node {
        if (i < 0 || i >= this.length) return null;
        let counter = 0;
        let current = this.head;
        while (counter !== i) {
            current = current.getNext();
            counter++;
        }
        return current;
    }

    set(value: any, i : number) : boolean {
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

    shift() : any {
        if (!this.length) return undefined;
        let current = this.head;
        this.head = current.getNext();  
        this.length--;

        return current && current.value ? current : null;
    }

    unshift(value : any) : LinkedList {
        let node = new Node(value);
        if (!this.head) {
            this.head = node;
            this.tail = node;
        }
        else {
            node.setNext(this.head);
            this.head = node;
            this.length++;
        }
        return this;
    }

    pop() : any {
        if (!this.head) return undefined;
        let current = this.head;
        let newTail = current;
        // This will traverse the list to the tail.
        while (current.getNext()) {
            // Here I'm setting the newTail to get the last reference before the tail
            // I need to keep updating newTail's reference because at every iteraction current changes its reference
            // But the tricky part is that newTail's still holding the previous reference even though we changed current's reference
            // So: newTail -> current -> Node1
            // When current decides to point to a new node like this:
            // current -> Node2
            // If we check newTails reference then, we get: newTail -> Node1
            // That's why we shouldn't get pointers and references confused. My experience with C++ would instinctively tell me 
            // that newTail was pointing to current's pointer, which is surely not true. What is happening is newTail 
            // is pointing to a reference, a stateless memory address. And no matter what the current pointer does (like switching refs) 
            // it will not follow its path. Valuable lesson for me here.
            newTail = current;
            current = current.getNext();
        }
        this.tail = newTail;
        this.tail.setNext(null);
        this.length--;
        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        return current.value;
    }

    traverse() : undefined {
        if (!this.head) return null;
        let current: any = this.head;
        console.log('====STARTING TRAVERSE====');
        while (current) {
            console.log(current.value);
            current = current.getNext();
            console.log('====');
        }
        console.log('====ENDING TRAVERSE====');
    }

    insert(value : any, index : number) : boolean {
        if (index < 0 || index > this.length) return false;
        if (index === this.length) this.push(value);
        else if (index === 0) this.unshift(value);
        else {
            let newNode = new Node(value);
            let node1 = this.get(index - 1);
            newNode.setNext(node1.getNext());
            node1.setNext(newNode);
            this.length++;
        }
        return true;
    }

    remove(index : number) : any {
        if (index < 0 || index > this.length) return false;
        if (index === this.length) return this.pop();
        else if (index === 0) return this.shift();
        else {
            let node1 = this.get(index - 1);
            let nextToNode1 = node1.getNext();
            // Setting the next node of node1 to be the next of the next of node 1. So skipping one node in the exact index received.
            node1.setNext(nextToNode1.getNext());
            this.length--;
            return nextToNode1.value;
        }
    }

    reverse() : LinkedList {
        // First I'm swapping the head with the tail with the node aux variable.
        let node = this.head;
        this.head = this.tail;
        this.tail = node;
        let next;
        let prev = null;

        for (let i = 0; i < this.length; i++) {
            next = node.next;
            node.next = prev;
            prev = node;
            node = next;
        }
        return this;
    }
}





