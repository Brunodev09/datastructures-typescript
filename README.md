# reversingLinkedLists
Building and reversing linked lists with Typescript.


# Example
```
Main class methods and parameters:

createNode(<number> n, <string> s) => returns type Nodes, which is an array of nodes.
n = number of nodes to be created and linked together. s = any string identifier.

insertInLinkedList(<Nodes> nodes) => returns type List, that refers to the HEAD.
nodes = array of nodes that returns from the createNode function.

printLinkedList(<List> list) => returns void.
Prints your dynamically modified string identifier in order of reference.

let myMain = new Main();
let nodes = myMain.createNodes(10, "myStrIdType"); // Will be incremented dynamically 
let list = myMain.insertInLinkedList(nodes);
myMain.printLinkedList(list); 
```
```
--> "myStrIdType0"
--> "myStrIdType1"
--> "myStrIdType2"
--> "myStrIdType3"
--> "myStrIdType4"
--> "myStrIdType5"
--> "myStrIdType6"
--> "myStrIdType7"
--> "myStrIdType8"
--> "myStrIdType9"
```
