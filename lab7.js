const fs = require('fs'); //import for FileIO
let abbyTotal = 0;
let tysonTotal = 0;
let zackTotal = 0;
const files = ['calculations1.json', 'calculations2.json', 'calculations3.json', 'calculations4.json'];

function readFiles(filesIn) {
    for (let i = 0; i < filesIn.length; i++) {
        fs.readFile(filesIn[i], 'utf8', (err, data) => { //one way to do fileIO in JavaScript
            if (err) {
                console.error(err);
                return;
            }
            const jsonData = JSON.parse(data); //how to parse JSON
            const calculations1 = jsonData.data.calculations;
            calc(calculations1);

            if (i === filesIn.length-1) {
                printTotals();
            }
        });
    }
}

function calc(calculationsIn) {
    let correct = 0;
    calculationsIn.forEach(j => { //example of a for each loop in JS
        if (j.performer === 'TRUE') {
            correct = j.calc;
        }
        if (j.performer === 'Abby') {
            abbyTotal += Math.abs(correct - j.calc);
        }
        if (j.performer === 'Tyson') {
            tysonTotal += Math.abs(correct - j.calc);
        }
        if (j.performer === 'Zack') {
            zackTotal += Math.abs(correct - j.calc);
        }
    });
}

function printTotals() {
    let arr = [abbyTotal, tysonTotal, zackTotal];
    arr.sort(function(a, b){return a - b}); // sort(): can be used to sort an array in ascending and descending order
    for(let i=0; i<arr.length;i++){ //example of a for-loop in JS
        if(abbyTotal == arr[i]){
            console.log(i+1 + ". Abby (" + arr[i]+")");
        }
        if(tysonTotal == arr[i]){
            console.log(i+1 + ". Tyson (" + arr[i]+")");
        }
        if(zackTotal == arr[i]){
            console.log(i+1 + ". Zack (" + arr[i]+")");
        }
    }
}

readFiles(files);
