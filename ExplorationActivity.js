import { faker } from '@faker-js/faker' ;

const accNums =[] //empty 
const nouns=[] //empty
const names = []//empty 

console.log("Before sorting:");
fillAccNums(10);
printArray(accNums);
accNumBubbleSort(accNums);
console.log("After sorting:");
printArray(accNums);
console.log("");

console.log("Average length of nouns");
fillNouns(10);
console.log(avgLength(nouns));
console.log("");

console.log("Assigned Seats");
fillNames(10);
assignsSeatNum(names);
console.log("");


//----------------------------- MAIN METHODS -----------------------------

// bubble sort algorithm - with account numbers

function accNumBubbleSort(arr){
    for(var i=0; i<arr.length;i++){
        for (var j = 0; j < (arr.length - i - 1); j++) {
            if(arr[j] > arr[j+1]){
                var curr = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = curr
            }
      }
    }
}

// takes in an array of nouns and finds the average length of the words

function avgLength(arr){
    var total = 0;
    for(var i=0; i<arr.length; i++ ){
       total = total + arr[i].length;
    }
    return total/arr.length;
}

// takes in an array of names and assigns them a seat 

function assignsSeatNum(arr){
    for(var i=0; i<arr.length;i++){
        console.log(arr[i] + " Seat:" + faker.airline.seat());
    }
}

//----------------------------- HELPER METHODS -----------------------------

// fills accNums with n amounts

function fillAccNums(num){
    for(var i=0; i<num;i++){
       console.log(accNums[i] = faker.finance.accountNumber());
    }
}

// fills array with n nouns
function fillNouns(num){
    for(var i=0; i<num;i++){
        nouns[i] = faker.word.noun();
    }
}

// fills array with n names
function fillNames(num){
    for(var i=0; i<num; i++){
        names[i] = faker.person.fullName();
    }
}

// prints the array passed into it

function printArray(arr){
    for(var i=0; i<arr.length; i++){
        console.log(arr[i]);
    }
}
