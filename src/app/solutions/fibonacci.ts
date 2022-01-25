class Fibonacci {
    static fib(n: number) : number { // O(2^n) S(n)
        if (n === 0) return 0;
        if (n === 1 || n === 2) return 1;
        return this.fib(n-1) + this.fib(n-2);
    }
    
    static fibMemo(n: number, memo : any = {}) : number {
        if (n in memo ) return memo[n] as number;
        if (n === 0) return 0;
        if (n === 1 || n === 2) return 1;
        
        memo[n] = this.fibMemo(n-1, memo) + this.fibMemo(n-2, memo);
    
        return memo[n];
    }    
}

for (let i = 0; i<=100; i++) {
    console.log(i,'=',Fibonacci.fibMemo(i).toLocaleString());
}