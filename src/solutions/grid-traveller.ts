import moment from 'moment';
import { checkAllEqual } from './helper';


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
export function gridTraveler(rows: number, columns: number): number {
  if (rows === 1 && columns === 1) return 1; // base case, 1x1 grid has 1 possible solution.
  if (rows === 0 || columns === 0) return 0; // base case 0x0 grid has no solution.
  return gridTraveler(rows - 1, columns) + gridTraveler(rows, columns - 1);
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
export function gridTravelerMemo(rows: number, columns: number, memo: any = {}): number {
  const key: string = rows + ',' + columns; // create key for memo
  if (key in memo) return memo[key]; // have we already calculated for the key?
  if (rows === 1 && columns === 1) return 1; // base case, 1x1 grid has 1 possible solution.
  if (rows === 0 || columns === 0) return 0; // base case 0x0 grid has no solution.
  memo[key] = gridTravelerMemo(rows - 1, columns, memo) + gridTravelerMemo(rows, columns - 1, memo); // store the value.
  return memo[key]
}

/**
 * Grid Traveller Solution using tabulation.
 *         O(m * n) time
 *         O(mn) space
 * @param rows Number of rows in the grid.
 * @param columns Number of columns in the grid.
 * @returns number of ways you can travel through the grid.
 * @returns 
 */
export function gridTravelerTab(rows: number, columns: number): number {
  if (rows<=0 || rows<=0) return 0;
  let table: number[][] = Array(rows + 1).fill(0).map(()=>new Array(columns+1).fill(0));
  table[1][1] = 1;
  for (let row = 1; row <= rows; row++) {
    for (let column = 1; column <= columns; column++) {
      table[row][column] += table[row][column - 1] + table[row - 1][column];

    }
  }
  return table[rows][columns];
}

/**
 * 
 * @param rows number of rows
 * @param columns number of columns
 */
export function gridTravelerTest(rows: number, columns: number) {
  
  let plain, memo, tab : number = 0;
  for (let row = 0; row <= rows; row++) {
    for (let column = 0; column <= columns; column++){
      plain = gridTraveler(row,column); memo = gridTravelerMemo(row,column); tab = gridTravelerTab(row,column);
      console.log(`rows:${row}; columns:${column}; plain:${plain}; memo:${memo}; tab:${tab}; passed:`,checkAllEqual(plain,memo,tab));
    }
  }
}

export function gridTravelerTime(rows: number, columns: number) {
  console.log(`timing the grid traveller implementations to the max of. Rows:${rows}; columns:${columns}`);
  let now = moment();
  for (let row = 0; row <= rows; row++) {
    for (let column = 0; column <= columns; column++){
      gridTraveler(row,column);
    }
  }
  console.log('plain:',moment(moment().diff(now)).format('mm:ss.SSSSSSS'));  

  now = moment();
  for (let row = 0; row <= rows; row++) {
    for (let column = 0; column <= columns; column++){
      gridTravelerMemo(row,column);
    }
  }
  console.log('memo:',moment(moment().diff(now)).format('mm:ss.SSSSSSS'));    
  
  now = moment();
  for (let row = 0; row <= rows; row++) {
    for (let column = 0; column <= columns; column++){
      gridTravelerTab(row,column);
    }
  }
  console.log('tab:',moment(moment().diff(now)).format('mm:ss.SSSSSSS'));    
  
  console.log('done timing.')
}

