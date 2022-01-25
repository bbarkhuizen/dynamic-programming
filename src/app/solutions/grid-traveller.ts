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
 function gridTraveler(rows: number, columns : number) : number {
    if (rows === 1 && columns === 1) return 1;
    if (rows === 0 || columns === 0) return 0;
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
 function gridTravelerMemo(rows: number, columns : number, memo: any = {}) : number {
    const key : string = rows + ',' + columns;
    if (key in memo) return memo[key];
    if (rows === 1 && columns === 1) return 1;
    if (rows === 0 || columns === 0) return 0;

    memo[key] = gridTravelerMemo(rows-1,columns, memo) + gridTravelerMemo(rows,columns-1, memo);
    return memo[key]
 }


// ---------------------------------------------------------------------------------------------
const rowMax : number = 10;
const colMax : number = 20;

for (let r : number = 1; r <= rowMax; r++){
    for (let c : number = 1; c <= colMax; c++) {
        console.log(`rows: ${r}, columns:${c} : `,gridTraveler(r,c).toLocaleString());
    }
}

for (let r : number = 1; r <= rowMax; r++){
    for (let c : number = 1; c <= colMax; c++) {
        console.log(`rows: ${r}, columns:${c} : `,gridTravelerMemo(r,c).toLocaleString());
    }
}

// ---------------------------------------------------------------------------------------------

 

 