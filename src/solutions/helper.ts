export function checkAllEqual(...args :any[]) {
    for(let i = 1; i < args.length; i++){
        if (args[i-1] !== args[i]) return false;
    }
    return true;
}