import {Node} from "./Node";
import {LinkedList} from "./LinkedList";

interface Nodes {
    // Array here defines a type of variable that can posses any key
    [i: number]: Node;
}


interface IMain {
    createNodes: (numberOfNodes : number, idType: string) => Nodes;
}

class Main implements IMain {


    createNodes(numberOfNodes : number, idType : string) : Nodes {
        let nodes : Nodes = {};

        for (let i = 0; i < numberOfNodes; i++) {
            nodes[i] = new Node(idType + i);
        }

        for (let j = 0; j < numberOfNodes - 1; j++) {
            nodes[j].setNext(nodes[j + 1]);
        }


        return nodes;
    }

    insertInLinkedList(nodes : Nodes) {

        let list : LinkedList = new LinkedList();
        list.insert(nodes[0]);

        return list;
    }

    printLinkedList(list : LinkedList) {
        for (let pointer = list.getNode(); list.hasNextPointer(); pointer = list.next()) {
            if (pointer) console.log(pointer.toString());
        }
    }
}










