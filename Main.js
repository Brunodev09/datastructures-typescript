"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Node_1 = require("./Node");
const LinkedList_1 = require("./LinkedList");
class Main {
    createNodes(numberOfNodes, idType) {
        let nodes = {};
        for (let i = 0; i < numberOfNodes; i++) {
            nodes[i] = new Node_1.Node(idType + i);
        }
        for (let j = 0; j < numberOfNodes - 1; j++) {
            nodes[j].setNext(nodes[j + 1]);
        }
        return nodes;
    }
    insertInLinkedList(nodes) {
        let list = new LinkedList_1.LinkedList();
        list.insert(nodes[0]);
        return list;
    }
    printLinkedList(list) {
        for (let pointer = list.getNode(); list.hasNextPointer(); pointer = list.next()) {
            if (pointer)
                console.log(pointer.toString());
        }
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTWFpbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIk1haW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxpQ0FBNEI7QUFDNUIsNkNBQXdDO0FBWXhDLE1BQU0sSUFBSTtJQUdOLFdBQVcsQ0FBQyxhQUFzQixFQUFFLE1BQWU7UUFDL0MsSUFBSSxLQUFLLEdBQVcsRUFBRSxDQUFDO1FBRXZCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxhQUFhLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDcEMsS0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksV0FBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQztTQUNuQztRQUVELEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxhQUFhLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ3hDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ2xDO1FBR0QsT0FBTyxLQUFLLENBQUM7SUFDakIsQ0FBQztJQUVELGtCQUFrQixDQUFDLEtBQWE7UUFFNUIsSUFBSSxJQUFJLEdBQWdCLElBQUksdUJBQVUsRUFBRSxDQUFDO1FBQ3pDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFFdEIsT0FBTyxJQUFJLENBQUM7SUFDaEIsQ0FBQztJQUVELGVBQWUsQ0FBQyxJQUFpQjtRQUM3QixLQUFLLElBQUksT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLEVBQUUsRUFBRSxJQUFJLENBQUMsY0FBYyxFQUFFLEVBQUUsT0FBTyxHQUFHLElBQUksQ0FBQyxJQUFJLEVBQUUsRUFBRTtZQUM3RSxJQUFJLE9BQU87Z0JBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztTQUNoRDtJQUNMLENBQUM7Q0FDSiJ9