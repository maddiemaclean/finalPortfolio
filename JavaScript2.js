const fs = require('fs');
let toString =""

fs.readFile('DataInput.txt', 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading input file:', err);
        return;
    }

    const lines = data.trim().split('\n');
    let splicedArr = [];
    let i = 0;

    while ( lines[i+1] !== 'END'){
        let numVals = parseInt(lines[i + 2]);
        splicedArr = lines.slice(i + 2, i + 2 + numVals);

        if(lines[i] === 'SUM'){
            toString += toString + findSum(splicedArr)+"\n"
        }

        else if (lines[i+1] === 'AVG'){
            toString += findAverage(splicedArr)+"\n"
        }

        else if (lines[i+1] === 'MAX'){
            toString += findMax(splicedArr)+"\n"
        }

        else if (lines[i+1] === 'MIN'){
            toString += findMin(splicedArr)+"\n"
        }

        else if (lines[i+1] === 'FXP'){
            let toReturn = []
            for(let i=0; i<splicedArr.length; i++){
                const number = parseInt(splicedArr[i]);
                toReturn[i] = findFXP(number);  
                toString += toReturn[i] + ", "
            }
            toString += "\n "
            return toReturn;
        }

        else if (lines[i+1] === 'FPO'){
            let toReturn = []
            for(let i=0; i<splicedArr.length; i++){
                const number = parseInt(splicedArr[i]);
                result[i] = findFPO(number);
                toString += result[i] + ", "
            }
            toString += "\n "

        }
        else if (lines[i+1] === 'FSIN'){
            let toReturn = []
            for(let i=0; i<splicedArr.length; i++){
                const number = parseInt(splicedArr[i]);
                result[i]= findSIN(number);
                toString += result[i] + ", "
            }
            toString += "\n "
        }

        else if (lines[i+1] === 'FCS'){
            let toReturn = []
            for(let i=0; i<splicedArr.length; i++){
                const number = parseInt(splicedArr[i]);
                result[i] = findCOS(number)
                toString += result[i] + ", "
            }
            toString += "\n "

        }//end of all the ifs
    splicedArr.length = 0;
    i++
    }
})

function findSum(arrIn){
    let sum = 0;
    for( let i=0; i< arrIn.length; i++){
        const number = parseInt(arrIn[i]);
        sum += number;
    }
    return sum
}

function findAverage(arrIn){
    let sum = 0;
    for (let i=0; i< arrIn.length; i++){
        const number = parseInt(arrIn[i]);
        sum += number;
    }
    return sum/arrIn.length
}

function findMax(arrIn){
    let max = 0;
    for( let i=0; i<arrIn.length; i++){
        const number = parseInt(arrIn[i]);
        if (number > max){
            max = number;
        }
    }
    return max;
}

function findMin(arrIn){
    let min = 10;
    for( let i=0; i<arrIn.length; i++){
        const number = parseInt(arrIn[i]);
        if (number < min){
            min = number;
        }
    }
    return min;
}

function findFXP(numIn){
    let result = 1; 
    let term = 1;

    for (let i=1; i<=50; i++) {
        term *= numIn / i;
        result += term;
    }

    return result;
}

function findFPO(numIn) {
    let result = Math.pow(Math.E, -50); 
    let term = 1;

    for (let i = 1; i <= 50; i++) {
        term *= 50 / i;
        result += term;
    }

    return result*Math.pow(numIn)/factorial(numIn);
}

function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * factorial(n-1);
    }
}

function findSIN(numIn){
    let result = 0;
    numIn = numIn % (2*Math.PI);
    let term = numIn;

    for (let i=1; i<= 50; i+=2) {
        result += term;
        term *= (-1)*(numIn*numIn)/((i+1) *(i+2));
    }

    return result;
}

function findCOS(numIn){
    let result = 1; 
    numIn = numIn % (2*Math.PI); 
    let term = 1;

    for (let i=1; i<=50; i+=2) {
        result += term;
        term *= (-1)*(numIn*numIn)/(i*(i+1));
    }

    return result;
}
