/*
    You are given two non-empty linked lists representing two non-negative integers. 
    The digits are stored in reverse order, and each of their nodes contains a single digit. 
    Add the two numbers and return the sum as a linked list.
    
    You may assume the two numbers do not contain any leading zero, except the number 0 itself.

    Examples:

        Input: l1 = [2,4,3], l2 = [5,6,4]
        Output: [7,0,8]
        Explanation: 342 + 465 = 807.

        Input : l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
        Output:      [8,9,9,9,0,0,0,1]
*/


export class ListNode {
     val: number
     next: ListNode | null
     constructor(val?: number, next?: ListNode | null) {
         this.val = (val===undefined ? 0 : val)
         this.next = (next===undefined ? null : next)
     }
     
 }

 function createListNodes(nums : number[]) : ListNode | null{
    if (nums.length <= 0) return null;

    let result : ListNode = new ListNode(nums[0]);
    let current : ListNode = result;
    for (let i = 1; i < nums.length; i++ ) {            
        current.next = new ListNode(nums[i]);
        current = current.next;
    }
    return result;
 }

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    if (l1 == null && l2 == null) return null;

    let c1 : ListNode | null = l1;
    let c2 : ListNode | null = l1;
    let result : ListNode | null = null;
    

    while (c1 !== null || c2 !== null) {
        let sum = (c1 != null ? c1.val : 0) + (c2 !=null? c2.val : 0);
    }
    
    return null;

};

let ln1 = createListNodes([9]);
let ln2 = createListNodes([9]);
console.log(ln1);
console.log(ln2);