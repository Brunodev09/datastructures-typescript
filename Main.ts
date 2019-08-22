import {Node} from "./Node";
import {LinkedList} from "./LinkedList";

const LIMIT = Math.floor(Math.random() * 100);

interface Nodes {
    // Array here defines a type of variable that can posses any key
    [i: number]: Node
}

// let nodes : Nodes = {};
//
// for (let i = 0; i < LIMIT; i++) {
//     nodes[i] = new Node(((i + Math.random() * 10000) + 1) + "");
// }

interface IMain {
    createNodes: (numberOfNodes : number, idType: string) => Nodes;
}

class Main implements IMain {


    createNodes(numberOfNodes : number, idType : string) : Nodes {
        let nodes : Nodes = {};

        for (let i = 0; i < numberOfNodes; i++) {
            nodes[i] = new Node(idType);
        }
        return nodes;
    }

    insertInLinkedList() {

    }

    printLinkedList() {

    }
}



//
// {
//     "client_id": "3MVG9vtcvGoeH2biBHAE28z9szDDi3l01Sca8PWQc0qw7BylUEFyW6wOc8VpuaIZPBvV5SL5Ves57POHlPXy6",
//     "client_secret": "C014F0E783E829D0E72498CA61FBF920C429521A6382A59FF3A72FA0F23C3463",
//     "redirect_uri": "https://localhost:3001/salesforce/redir",
//     "response_type": "code"
// }






