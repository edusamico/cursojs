function run (x, y) {
    const equal = calcEqual(x, y);
    const sum = x + y;
    const compare10 = calcCompare10(x, y);
    const compare20 = calcCompare20(x, y);
    
    return `Os números ${x} e ${y} ${equal}. A soma dá ${sum}, que ${compare10} que 10 e ${compare20} que 20.`;
}

function calcEqual (x, y) {
    if (x === y) {
        return `são iguais`;    
    }
        return `são diferentes`;
}

function calcCompare10 (sum) {
    if (sum > 10) {
        return `é maior`;
    } 
        return `não é maior`;
}

function calcCompare20 (sum) {
    if (sum < 20) {
        return `é menor`;
    }
        return `não é menor`;
}
//INSERT 2 NUMBERS
console.log(run(5, 9));