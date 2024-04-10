const fs = require('fs');
let toString ="";

fs.readFile('DataInput.txt', 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading input file:', err);
        return;
    }

    const lines = data.trim().split('\n');
    let splicedArr = [];
    let i = 0;

    while (i < lines.length) {
        if (lines[i].trim() === 'SUM') {
            let numVals = parseInt(lines[i + 1]);
            splicedArr = lines.slice(i + 2, i + 2 + numVals);
            toString += findSum(splicedArr) + "\n";
            i += numVals + 2;
        } 

        else if (lines[i].trim() === 'AVG') {
            let numVals = parseInt(lines[i + 1]);
            splicedArr = lines.slice(i + 2, i + 2 + numVals);
            toString += findAverage(splicedArr) + "\n";
            i += numVals + 2; 
        }

        else if (lines[i].trim() === 'MAX') {
            let numVals = parseInt(lines[i + 1]);
            splicedArr = lines.slice(i + 2, i + 2 + numVals);
            toString += findMax(splicedArr) + "\n";
            i += numVals + 2; 
        } 
       else if (lines[i].trim() === 'MIN') {
            let numVals = parseInt(lines[i + 1]);
            splicedArr = lines.slice(i + 2, i + 2 + numVals);
            toString += findMin(splicedArr) + "\n";
            i += numVals + 2; 
        }

        else if (lines[i].trim() === 'FXP') {
            let numVals = parseInt(lines[i + 1]);
            splicedArr = lines.slice(i + 2, i + 2 + numVals);
            for (let j = 0; j < splicedArr.length; j++) {
                const number = parseFloat(splicedArr[j]);
                toString += findFXP(number) + ", ";
            }
            toString += "\n";
            i += numVals + 2; 
        }
        
        else if (lines[i].trim() === 'FPO') {
            let numVals = parseInt(lines[i + 1]);
            splicedArr = lines.slice(i + 2, i + 2 + numVals);
            for (let j = 0; j < splicedArr.length; j++) {
                const number = parseFloat(splicedArr[j]);
                toString += findFPO(number) + ", ";
            }
            toString += "\n";
            i += numVals + 2; 
        }

        else if (lines[i].trim() === 'FSIN') {
            let numVals = parseInt(lines[i + 1]);
            splicedArr = lines.slice(i + 2, i + 2 + numVals);
            for (let j = 0; j < splicedArr.length; j++) {
                const number = parseFloat(splicedArr[j]);
                toString += findSIN(number) + ", ";
            }
            toString += "\n";
            i += numVals + 2;
        }
        
        else if (lines[i].trim() === 'FCS') {
            let numVals = parseInt(lines[i + 1]);
            splicedArr = lines.slice(i + 2, i + 2 + numVals);
            for (let j = 0; j < splicedArr.length; j++) {
                const number = parseFloat(splicedArr[j]);
                toString += findCOS(number) + ", ";
            }
            toString += "\n";
            i += numVals + 2; 
        } 
        
        else if (lines[i].trim() === 'END') {
            break; 
        } 
        
        else {
            i++; 
        }
    }

    fs.writeFileSync("Output.txt", toString);
});

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

    return result * Math.pow(numIn, 50) / factorial(50);
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
