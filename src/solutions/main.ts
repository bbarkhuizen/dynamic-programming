import { createListNodes } from './add-two-numbers'
import * as dp from './dynamic-programming-examples'




// ---------------------------------------------------------------------------------------------
// FIBONACCI
//dp.fibonacciTest(40);
// dp.fibonacciTime(45);
// ---------------------------------------------------------------------------------------------
// GRID TRAVELLER
// dp.gridTravelerTest(10,20);
// dp.gridTravelerTime(10,20);
// ---------------------------------------------------------------------------------------------
// CAN SUM
//dp.canSumTest(12,[6,7,8,9]);
// ---------------------------------------------------------------------------------------------
// HOW SUM
//dp.howSumTest(7,[5,3,4])// 3,4
// ---------------------------------------------------------------------------------------------
// BEST SUM 
//console.log(dp.bestSumTab(8,[2,3,5]))// 3,5
//console.log(dp.bestSumTab(25,[5,6,7,8,12,9]))// 3,4
// ---------------------------------------------------------------------------------------------
// Add Two Numbers
let l1 = createListNodes([1,2,3,4]);
let l2 = createListNodes([1,2,3,4]);
console.log(dp.addTwoNumbers(l1,l2));