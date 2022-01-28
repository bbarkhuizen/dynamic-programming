 /**
  * Say that you are a traveler on a 2D grid. You begin in the top-left corner and your goal is to travel
  * to the bottom-right corener. You may only move down or right.
  * 
  * In how many wasy can you travel to the goal on a grid with dimensions rows * columns.
  */


 /**
  * Grid Traveller Solution
  *     O(2^(n+m)) time
  *     O(n+m) space
  * @param rows Number of rows in the grid.
  * @param columns Number of columns in the grid.
  * @returns number of ways you can travel through the grid.
  */
  export function gridTraveler(rows: number, columns : number) : number {
    if (rows === 1 && columns === 1) return 1; // base case, 1x1 grid has 1 possible solution.
    if (rows === 0 || columns === 0) return 0; // base case 0x0 grid has no solution.
    return gridTraveler(rows-1,columns) + gridTraveler(rows,columns-1);
 }

 /**
  * Grid Traveller Solution using memoization.
  *         O(m * n) time
  *         O(n + m) space
  * @param rows Number of rows in the grid.
  * @param columns Number of columns in the grid.
  * @param memo memo to store results.
  * @returns number of ways you can travel through the grid.
  * @returns 
  */
  export function gridTravelerMemo(rows: number, columns : number, memo: any = {}) : number {
    const key : string = rows + ',' + columns; // create key for memo
    if (key in memo) return memo[key]; // have we already calculated for the key?
    if (rows === 1 && columns === 1) return 1; // base case, 1x1 grid has 1 possible solution.
    if (rows === 0 || columns === 0) return 0; // base case 0x0 grid has no solution.
    memo[key] = gridTravelerMemo(rows-1,columns, memo) + gridTravelerMemo(rows,columns-1, memo); // store the value.
    return memo[key]
 }


// ---------------------------------------------------------------------------------------------
// const rowMax : number = 10;
// const colMax : number = 20;

// for (let r : number = 1; r <= rowMax; r++){
//     for (let c : number = 1; c <= colMax; c++) {
//         console.log(`rows: ${r}, columns:${c} : `,gridTraveler(r,c).toLocaleString());
//     }
// }

// for (let r : number = 1; r <= rowMax; r++){
//     for (let c : number = 1; c <= colMax; c++) {
//         console.log(`rows: ${r}, columns:${c} : `,gridTravelerMemo(r,c).toLocaleString());
//     }
// }

// ---------------------------------------------------------------------------------------------

 

 