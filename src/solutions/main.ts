import moment from 'moment';

import * as dp from './dynamic-programming-examples'
import { fibonacci, fibonacciMemo, fibonacciTab } from './fibonacci';



// ---------------------------------------------------------------------------------------------
function checkAllEqual(...args :number[]) {
    for(let i = 1; i < args.length; i++){
        if (args[i-1] !== args[i]) return false;
    }
    return true;
}

function testAllFibonacci(max: number){
    console.log('testing...');
    let now = moment();
    let f,fm,ft : number;
    for (let index = 0; index<=max; index++){
        f = fibonacci(index); fm = fibonacciMemo(index); ft=fibonacciTab(index);
        console.log(`index=${index}; f:${f}; fm:${fm}; ft:${ft}`,checkAllEqual(f,fm,ft));
    }
    console.log('finished');
    console.log(moment(moment().diff(now)).format('mm:ss.SSSSSSS'));    
}

function timeFibonacci(max : number){
    console.log(`timing the fib implementations to the max of ${max}`);
    let now = moment();
    for (let i = 0; i<=max; i++){
        fibonacci(i);
    }
    console.log('fibonacci:',moment(moment().diff(now)).format('mm:ss.SSSSSSS'));  

    now = moment();
    for (let i = 0; i<=max; i++){
        fibonacciMemo(i);
    }
    console.log('fibonacciMemo:',moment(moment().diff(now)).format('mm:ss.SSSSSSS'));    
    
    now = moment();
    for (let i = 0; i<=max; i++){
        fibonacciTab(i);
    }
    console.log('fibonacciTab:',moment(moment().diff(now)).format('mm:ss.SSSSSSS'));    
    
    console.log('done timing.')
}
// ---------------------------------------------------------------------------------------------

testAllFibonacci(40);
timeFibonacci(45);
