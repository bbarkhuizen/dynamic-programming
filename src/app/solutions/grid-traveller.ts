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

 console.log(gridTraveler(1,1).toString()); // 1
 console.log(gridTraveler(2,2).toString()); // 2
 console.log(gridTraveler(2,3).toString()); // 3

 