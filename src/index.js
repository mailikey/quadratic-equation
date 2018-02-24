module.exports = function solveEquation(equation) {
    let SymbolArray = equation.split(' ');
    let a = Number(SymbolArray[0]);
    let b = 0;
    let c = 0;
    if (SymbolArray[3] === '-') {
        b = Number(-SymbolArray[4]);
    }
    else {
        b = Number(SymbolArray[4]);
    }

    if (SymbolArray[7] === '-') {
        c = Number(-SymbolArray[8]);
    }
    else {
        c = Number(SymbolArray[8]);
    }
    let D = ((b * b) - (4 * a * c));
    let x1 = 0;
    let x2 = 0;
    let FinishArray = [];
    if (D > 0) {
        x1 = (-b + Math.sqrt(D)) / (2 * a);
        x2 = (-b - Math.sqrt(D)) / (2 * a);
        FinishArray.push(Math.round(x1));
        FinishArray.push(Math.round(x2));

    }
    return FinishArray;

};
