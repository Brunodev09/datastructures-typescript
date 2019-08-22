"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Node_1 = require("./Node");
const LIMIT = Math.floor(Math.random() * 100);
class Main {
    createNodes(numberOfNodes, idType) {
        let nodes = {};
        for (let i = 0; i < numberOfNodes; i++) {
            nodes[i] = new Node_1.Node(idType);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTWFpbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIk1haW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxpQ0FBNEI7QUFHNUIsTUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsR0FBRyxDQUFDLENBQUM7QUFpQjlDLE1BQU0sSUFBSTtJQUdOLFdBQVcsQ0FBQyxhQUFzQixFQUFFLE1BQWU7UUFDL0MsSUFBSSxLQUFLLEdBQVcsRUFBRSxDQUFDO1FBRXZCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxhQUFhLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDcEMsS0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksV0FBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQy9CO1FBQ0QsT0FBTyxLQUFLLENBQUM7SUFDakIsQ0FBQztJQUVELGtCQUFrQjtJQUVsQixDQUFDO0lBRUQsZUFBZTtJQUVmLENBQUM7Q0FDSjtBQUlELEVBQUU7QUFDRixJQUFJO0FBQ0osNEdBQTRHO0FBQzVHLDJGQUEyRjtBQUMzRixpRUFBaUU7QUFDakUsOEJBQThCO0FBQzlCLElBQUkifQ==